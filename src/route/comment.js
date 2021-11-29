const express = require('express');
const router = express.Router()
const isLogin = require('../app/middlewares/checkLogin')
const checkXss = require('../app/middlewares/checkXss')
const permissionDeleteComment = require('../app/middlewares/permissionDeleteComment.js')
const permissionEditComment = require('../app/middlewares/permissionEditComment.js')

const CommentController = require('../app/controllers/CommentController')

router.post('/', isLogin, checkXss, CommentController.addComment);
router.delete('/', isLogin, permissionDeleteComment, CommentController.deleteComment);
router.put('/', isLogin, checkXss, permissionEditComment, CommentController.editComment);

module.exports = router