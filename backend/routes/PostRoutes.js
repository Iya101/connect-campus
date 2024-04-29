const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

const Post = require("../models/Post");

// Gets all posts from the database
router.get('/', (req, res) => {
    Post.find()
    .populate('comments')
    .exec()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ error: 'No posts exist.'}));
});

// Gets a specific post from the database
router.get('/:id', (req, res) => {
    Post.findById(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(404).json({ error: 'This post does not exist.'}));
});

// Posts a new post to the database
router.post('/', bodyParser.json(), (req, res) => {
    Post.create(req.body)
    .then((post) => res.json({ msg: 'Post has been successfully added.' }))
    .catch((err) => res.status(400).json({ error: 'Post cannot be added.' }));
});

// router.put('/:id', (req, res) => {
//     Post.findByIdAndUpdate(req.params.id, req.body)
//     .then((post) => res.json({ msg: 'Post has been successfully updated.' }))
//     .catch((err) => res.status(400).json({error: 'Unable to update the post.' })
//     );
// });
// Updates a post in the database
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;

    Post.findByIdAndUpdate(postId, { title, content }, { new: true })
        .then((post) => {
            if (!post) {
                return res.status(404).json({ error: 'Post not found.' });
            }
            res.json({ msg: 'Post has been successfully updated.', post });
        })
        .catch((err) => res.status(400).json({ error: 'Unable to update the post.', err }));
});
router.put('/:id/like', async (req, res) => {
    const postId = req.params.id;
    const userId = req.body.userId;

    try {
        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found.' });
        }

        if (post.likes.includes(userId)) {
            // Removes the like
            await Post.findByIdAndUpdate(postId, { $pull: { likes: userId }}, { new: true });
        } else {
            // Likes the post
            await Post.findByIdAndUpdate(postId, { $push: { likes: userId }}, { new: true });
        }
        res.json({ msg: 'Likes updated', post});
    } catch (err) {
        console.error('Unable to update likes.', err);
    }
});
// Deletes a post in the database
router.delete('/:id', (req, res) => {
    Post.findByIdAndDelete(req.params.id)
    .then((post) => res.json({ msg: 'Post has been successfully deleted. ' }))
    .catch((err) => res.status(404).json({ error: 'Unable to delete the post.' }));
});

module.exports = router;
