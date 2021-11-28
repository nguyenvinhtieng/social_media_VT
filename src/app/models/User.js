const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'Account' },
    name: { type: String },
    email: { type: String },
    introduction: { type: String },
    image: { type: String },
    website: { type: String },
    common: { type: String, default: "no" } // yes or no
},
    {
        timestamps: true
    }
);


module.exports = mongoose.model('User', User);
