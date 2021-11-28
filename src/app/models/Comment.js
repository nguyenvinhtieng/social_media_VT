const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    postid: { type: Schema.Types.ObjectId, ref: 'Post' },
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, required: true }
},
    {
        timestamp: true
    }
)


module.exports = mongoose.model('Comment', Comment)
