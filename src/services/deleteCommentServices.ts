import Comments from '../database/models/commentModel';

export async function deleteComment(commentId: number) {
  try {
    const comment = await Comments.findByPk(commentId);
    if (!comment) {
      return null;
    }
    await comment.destroy();
    return comment;
  } catch (error) {
    throw error;
  }
}
