const postModel = require('../models/postModel')

const adminController = {
  index: (req, res) => {
    const posts = postModel.getAllPosts()

    res.render('admin', { posts })
  },
  create: (req, res) => {
    res.render('newPostForm')
  },
  save: (req, res) => {
    const { title, content } = req.body
    const newPost = postModel.createPost(title, content)
    postModel.savePost(newPost)

    res.redirect('/admin')
  },
  delete: (req, res) => {
    const postId = req.params.id
    postModel.deletePost(postId)

    res.redirect('/admin')
  },
  edit: (req, res) => {
    const postId = req.params.id
    const post = postModel.getPostById(postId)

    res.render('editPostForm', { post })
  },
  update: (req, res) => {
    const postId = req.params.id
    const { title, content } = req.body
    postModel.updatePost(postId, { title, content })

    res.redirect('/admin')
  }
}

module.exports = adminController
