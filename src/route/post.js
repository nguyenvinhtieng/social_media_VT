const express = require('express');
const router = express.Router()
const isLogin = require('../app/middlewares/checkLogin')
const permissionAccessPost = require('../app/middlewares/permissionAccessPost')
const PostController = require('../app/controllers/PostController')

router.post('/', isLogin, PostController.createPost);
router.put('/', isLogin, permissionAccessPost, PostController.editPost);
router.delete('/', isLogin, permissionAccessPost, PostController.deletePost);
router.get('/:id', PostController.viewPost);

module.exports = router