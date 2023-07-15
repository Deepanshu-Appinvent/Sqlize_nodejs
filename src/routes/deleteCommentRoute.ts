import express from 'express';
import { deleteCommentController } from '../controllers/deleteCommentController';

const router = express.Router();

router.delete('/comments/:id', deleteCommentController);

export default router;
