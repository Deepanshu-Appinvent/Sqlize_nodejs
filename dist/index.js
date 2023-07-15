"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = __importDefault(require("./src/database/db_connection"));
const signupController_1 = __importDefault(require("./src/controllers/signupController"));
const loginController_1 = __importDefault(require("./src/controllers/loginController"));
const deleteCommentRoute_1 = __importDefault(require("./src/routes/deleteCommentRoute"));
const postController_1 = __importDefault(require("./src/controllers/postController"));
const commentController_1 = __importDefault(require("./src/controllers/commentController"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
// Define routes
app.post('/posts', postController_1.default);
app.post('/comments', commentController_1.default);
app.post('/signup', signupController_1.default);
app.post('/login', loginController_1.default);
app.use('/delcomment', deleteCommentRoute_1.default);
db_connection_1.default.dbConn.authenticate()
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
//# sourceMappingURL=index.js.map