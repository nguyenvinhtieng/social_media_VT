const Post = require('../models/Post');
const validator = require('validator');
const { POST_SKIP } = require('../../credentials')
class PostController {
    async createPost(req, res) {
        const { content, images } = req.body
        const _id = req._id
        if (validator.isEmpty(content)) return res.json({ success: false, message: "Content can not be empty!" })
        try {
            const data = { userid: _id, content, images }
            const post = new Post(data)
            await post.save()
            return res.json({ success: true, message: "Post saved!", post })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async editPost(req, res) {
        const { content, _id } = req.body
        if (validator.isEmpty(content)) return res.json({ success: false, message: "Content is empty!" })
        try {
            const post = await Post.findOneAndUpdate({ _id }, req.body, { new: true })
            return res.json({ success: true, message: "Post updated!", post })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async deletePost(req, res) {
        const { _id } = req.body
        try {
            await Post.deleteOne({ _id })
            return res.json({ success: true, message: "Post deleted!" })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async viewPost(req, res) {
        let _id = req.params.id
        try {
            const post = await Post.findById(_id)
            if (!post) return res.json({ success: false, message: "Post not found!" })
            return res.json({ success: true, message: "Get post successfully!", post })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async getTenPost(req, res) {
        let { page, userid } = req.body
        let skip = page * POST_SKIP
        const condition = {}
        if (userid) condition.userid = userid
        try {
            let numberPost = await Post.count(condition)
            if (numberPost <= skip) return res.json({ success: false, message: "You was read all posts!" })
            let post = await Post.find(condition).skip(skip).sort({ createdAt: -1 }).limit(POST_SKIP).lean()
            return res.json({ success: true, message: `Get post successfully, page ${page}`, post })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }
}

module.exports = new PostController();
