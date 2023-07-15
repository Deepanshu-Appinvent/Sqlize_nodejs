import commentService from '../services/commentServices';

async function commentController(req, res) {
try {
const { post_id, content } = req.body;
const comment = await commentService.createComment(post_id, content);
res.json(comment);
} catch (error) {
console.error(error);
res.status(500).json({ error: 'Internal server error' });
}
}

export default {
commentController
};