const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

const Comment = require("../../models/Comment");

// Gets all comments from the database
router.get('/', (req, res) => {
    Comment.find()
    .then((comments) => res.json(comments))
    .catch((err) => res.status(404).json({ error: 'No comments exist.'}));
});

// Gets a specific comment from the database
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id)
    .then((comment) => res.json(comment))
    .catch((err) => res.status(404).json({ error: 'This comment does not exist.'}));
});

// Posts a new comment to the database
router.post('/', bodyParser.json(), (req, res) => {
    Comment.create(req.body)
    .then((comment) => res.json({ msg: 'Comment has been successfully added.' }))
    .catch((err) => res.status(400).json({ error: 'Comment cannot be added.' }));
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
