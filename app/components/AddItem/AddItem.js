import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ onAdd, onClose, user }) => {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate input fields
        if (!postData.title.trim() || !postData.content.trim()) {
            alert('Please ensure that all fields are filled.');
            return;
        }

        // Call the onAdd function to add the new post
        onAdd(postData);

        // Clear input fields after posting
        setPostData({
            title: '',
            content: ''
        });

        // Close the AddItem component (e.g., modal or popup)
        onClose();
    };

    return (
        <div className="add-item">
            <div className="add-item-content">
                {/* Implement the close button with the onClick event listener calling the onClose function */}
                <span className="close-button" onClick={onClose}>X</span>
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        id="title" // Adding id for clarity, though it's optional since handleChange uses name
                        placeholder="Title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="content"
                        id="content" // Adding id for clarity
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
