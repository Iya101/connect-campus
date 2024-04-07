import React, { useState } from 'react';
import './AddItem.css';

const AddItem = ({ onAdd /*, user*/ }) => {
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    const handleChange = (e) => {
<<<<<<< HEAD
        const { id, value } = e.target;
        setPostData (prevState => ({
=======
        const { name, value } = e.target;
        setPostData(prevState => ({
>>>>>>> 8a2ceab343db12f9b22a5d86aa0dca8da4fd807f
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Uncomment and adjust this logic if needed for user sign-in checks
        /*
        if (!user) {
            alert('Please sign in to post!');
            return;
        }
        */

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
    };

    return (
        <div className="add-item">
            <div className="add-item-content">
                {/* Uncomment or adjust this if you have a close function
                <span className="close-button" onClick={onClose}>X</span> */}
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={postData.title}
                        onChange={handleChange}
                    />
                    <textarea
                        name="content"
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
