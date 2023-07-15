import Post from '../database/models/postModel'; 

async function createPost(title: string, content: string){
  try {
    const post = await Post.create({ title, content });
    return post;
  } catch (error) {
    console.error('Failed to create post:', error);
    throw error;
  }
}

export { createPost, Post };
