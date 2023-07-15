import { Request, Response } from 'express';
import postService from '../services/postServices';

async function postController(req: Request, res: Response) {
  try {
    const { title, content } = req.body;
    const post = await postService.createPost(title as string, content as string);
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export default {
  postController,
};
