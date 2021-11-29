const Post = require('../models/Post');
const Comment = require('../models/Comment');
const validator = require('validator');

class CommentController {
    async addComment(req, res) {
        const { postid, content, reply } = req.body
        const userid = req._id
        try {
            const post = await Post.findById(postid)
            if (!post) return res.json({ success: false, message: 'Post not found!' })
            let data = {
                postid,
                content,
                userid,
                reply: reply ? reply : ""
            }
            let comment = new Comment(data)
            await comment.save()
            return res.json({ success: true, message: "Add comment to post successfully!", comment })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async deleteComment(req, res) {
        let { _id } = req.body
        try {
            await Comment.deleteOne({ _id })
            return res.json({ success: true, message: "Comment deleted!" })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    }

    async editComment(req, res) {
        try {
            const comment = await Comment.findOneAndUpdate({ _id }, req.body, { new: true })
            return res.json({ success: true, message: "Comment updated!", comment })
        } catch (error) {
            console.log(error)
            res.json({ success: false, message: error.message })
        }
    }
}

module.exports = new CommentController();
