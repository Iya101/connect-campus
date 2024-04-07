'use client';

import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ onAdd, onClose, user }) => {
    const [post, setPost] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPost(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user is signed in
        if (!user) {
            alert('Please sign in to post!');
            return;
        }

        // Validate input fields
        if (!post.title.trim() || !post.content.trim()) {
            alert('Please ensure that all fields are filled.');
            return;
        }

        // Call the onAdd function to add to the new post
        onAdd({ title, content });

        //Clear input fields
        setTitle('');
        setContent('');

        // Close the pop-up window
        onClose();
    };

    return (
        <div className="add-item">
            <div className="add-item-content">
                <span className="close-button" onClick={onClose}>X</span>
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={post.title}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Write your post here!"
                        value={post.content}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Post</button> 
                </form>
            </div>
        </div>
    );

}

export default AddItem;