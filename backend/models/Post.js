const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now },
    tags: [{ type: String, required: true }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.pre('save', function(next) {
    this.date = new Date();
    next();
});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;