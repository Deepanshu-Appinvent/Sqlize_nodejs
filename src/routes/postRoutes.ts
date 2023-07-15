import express from 'express';
import postController from '../controllers/postController';

const router = express.Router();

router.post('/', postController.postController);

export default router;