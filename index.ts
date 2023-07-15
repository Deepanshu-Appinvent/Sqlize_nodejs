import express from 'express';
import bodyParser from 'body-parser';
import db from './src/database/db_connection';

import signupController from './src/controllers/signupController';
import loginController from './src/controllers/loginController';
import delcommentRoutes from './src/routes/deleteCommentRoute';


import postController from './src/controllers/postController';
import commentController from './src/controllers/commentController';

const app = express();
app.use(bodyParser.json());

// Define routes
app.post('/posts', postController);
app.post('/comments', commentController);

app.post('/signup', signupController);
app.post('/login', loginController);
app.use('/delcomment', delcommentRoutes);


db.dbConn.authenticate()
.then(() => {
console.log('Connection successful');
const port = 5000;
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});
})
.catch((err) => {
console.log('Unable to connect:', err);
});