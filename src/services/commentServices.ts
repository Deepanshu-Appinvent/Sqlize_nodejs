import Comment from '../database/models/commentModel';

async function createComment(content: string, postId: number) {
  try {
    const comment = await Comment.create({ content, post_id: postId });
    return comment;
  } catch (error) {
    console.error('Failed to create comment:', error);
    throw error;
  }
}

export default {
  createComment
};
