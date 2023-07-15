
import express from 'express';
import commentController from '../controllers/commentController';

const router = express.Router({ mergeParams: true });

router.post('/', commentController.commentController);

export default router;