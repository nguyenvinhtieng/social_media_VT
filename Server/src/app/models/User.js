const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const User = new Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'Account' },
    name: { type: String },
    email: { type: String },
    introduction: { type: String },
    image: { type: String },
    website: { type: String },
    common: { type: String, default: "no" }, // yes or no,
    slug: { type: String, slug: "name" }
},
    {
        timestamps: true
    }
);

mongoose.plugin(slug);
module.exports = mongoose.model('User', User);
