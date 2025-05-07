let posts = [
  {
    id: '1',
    title: 'Post 1',
    content: 'Content 1',
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

const postModel = {
  getAllPosts() {
    return posts
  },
  getPostById(id) {
    return posts.find(post => post.id === id)
  },
  createPost(title, content) {
    const post = {
      id: Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    return post
  },
  savePost(post) {
    posts.unshift(post)
  },
  updatePost(id, updatePost) {
    const index = posts.findIndex(post => post.id === id)
    posts[index] = {
      ...posts[index],
      ...updatePost,
      updatedAt: new Date()
    }
    return posts[index]
  },
  deletePost(id) {
    posts = posts.filter(post => post.id !== id)
  }
}

module.exports = postModel
