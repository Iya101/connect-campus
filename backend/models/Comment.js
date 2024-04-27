const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

CommentSchema.pre('save', function(next) {
    this.date = new Date();
    next();
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;