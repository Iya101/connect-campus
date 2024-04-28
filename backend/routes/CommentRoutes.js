const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var bodyParser = require("body-parser");

const Comment = require("../models/Comment");
const Post = require('../models/Post');

// Gets all comments from the database
router.get('/', (req, res) => {
    Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(404).json({ error: 'No comments exist.'}));
});

router.get('/:postId/comments', (req, res) => {
    Comment.find({ postId: req.params.postId })
    .then((comments) => {
        res.json(comments);
    })
    .catch((err) => {
        console.error('Unable to get comments for post.', err);
        res.status(404).json({ error: 'This post does not exist.'});
    })

    // Post.findById(req.params.id)
    // .then((post) => res.json(post))
    // .catch((err) => res.status(404).json({ error: 'This post does not exist.'}));
});

// Gets a specific comment from the database
// router.get('/:id', (req, res) => {
//     Comment.findById(req.params.id)
//     .then((comment) => res.json(comment))
//     .catch((err) => res.status(404).json({ error: 'This comment does not exist.'}));
// });

/* Old Comment Route
router.post('/', bodyParser.json(), (req, res) => {
    Comment.create(req.body)
    .then((comment) => res.json({ msg: 'Comment has been successfully added.' }))
    .catch((err) => res.status(400).json({ error: 'Comment cannot be added.' }));
});
*/

router.post('/', bodyParser.json(), async (req, res) => {
    try {
        const newComment = await Comment.create(req.body);
        // .then((comment) => res.json({ msg: 'Comment has been successfully added.', comment }))
        // .catch((err) => res.status(400).json({ error: 'Comment cannot be added.', err }));
        //const newComment = await Comment.create(req.body);
        const idPost = req.body.postId;
        if (!mongoose.Types.ObjectId.isValid(idPost)) {
            return res.status(404).json({ error: 'Invalid id post.', err}); 
        }
        const updatedPost = await Post.findByIdAndUpdate(idPost, { $push: { comments: newComment._id }}, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ error: 'Post not found.' });
        }
        return res.json({ msg: 'Comment has been successfully added to post.', post: updatedPost });
    } catch (err) {
        console.error('Error in adding comment to post', err);
        return res.status(404).json({ error: 'Unable to comment.', err});
    }
    

    // Post.findByIdAndUpdate(idPost, { $push: { comments: newComment._id }}, { new: true })
    //     .then((post) => {
    //         if (!post) {
    //             return res.status(404).json({ error: 'Post not found.' });
    //         }
    //         res.json({ msg: 'Comment has been successfully added to post.', post });
    //     })
    //     .catch((err) => res.status(404).json({ error: 'Unable to comment.', err}));
});

// Updates a comment from the database
router.put('/:id', (req, res) => {
    const commentId = req.params.id;
    const { content } = req.body;
    
    Comment.findByIdAndUpdate(commentId, { content }, { new: true })
        .then((comment) => {
            if (!comment) {
                return res.status(404).json({ error: 'Comment not found.' });
            }
            res.json({ msg: 'Comment has been successfully updated.', post });
        })
        .catch((err) => res.status(400).json({ error: 'Unable to update the comment.', err }));
});

// Deletes a comment in the database
router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then((post) => res.json({ msg: 'Comment has been successfully deleted. ' }))
    .catch((err) => res.status(404).json({ error: 'Unable to delete the comment.' }));
});

module.exports = router;
