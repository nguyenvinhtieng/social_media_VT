const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = new Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'Account' },
    content: { type: String },
    images: { type: Array }
},
    {
        timestamps: true
    }
);
module.exports = mongoose.model('Post', Post);
