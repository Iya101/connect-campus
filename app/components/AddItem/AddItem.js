import React, { useState } from 'react';
import './AddItem.css';



const AddItem = ({ onAdd, onClose, user }) => {
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        tags: ''
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

        if (!postData.title.trim() || !postData.content.trim() || !postData.tags.trim()) {
            alert('Please ensure that all fields are filled.');
            return;
        }

        onAdd(postData);

        setPostData({
            title: '',
            content: '',
            tags: ''
        });

        onClose();
    };

    return (
        <div className="add-item">
            <div className="add-item-content">
                <span className="close-button" onClick={onClose}>X</span>
                <h2>Add New Post</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Title" value={postData.title} onChange={handleChange} />
                    <textarea name="content" placeholder="Write your post here!" value={postData.content} onChange={handleChange}></textarea>
                    <input type="text" name="tags" placeholder="Tags (comma-separated)" value={postData.tags} onChange={handleChange} />
                    <button type="submit">Post</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;

