'use client';

import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ onAdd, user }) => {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setPostData (prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user is signed in
        // if (!user) {
        //     alert('Please sign in to post!');
        //     return;
        // }

        // Validate input fields
        if (!postData.title.trim() || !postData.content.trim()) {
            alert('Please ensure that all fields are filled.');
            return;
        }

        // Call the onAdd function to add to the new post
        onAdd({ postData });

        //Clear input fields
        setPostData({
            title: '',
            content: ''
        });

    };

    return (
        <div className="add-item">
            <div className="add-item-content">
                {/* <span className="close-button" onClick={onClose}>X</span> */}
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder="Write your post here!"
                        value={postData.content}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Post</button> 
                </form>
            </div>
        </div>
    );

};

export default AddItem;