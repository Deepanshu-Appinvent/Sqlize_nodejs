import { Request, Response } from 'express';
import { deleteComment } from '../services/deleteCommentServices';

export async function deleteCommentController(req: Request, res: Response) {
  try {
    const { id } = req.body;
    const comment = await deleteComment(id);
    if (!comment) {
      res.status(404).json({ status: 'Not Found' });
    } else {
      res.status(200).json({ status: 'Comment deleted successfully' });
    }
  } catch (error) {
    res.status(502).json({ status: 'Bad Gateway' });
  }
}
