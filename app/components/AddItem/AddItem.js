import React, { useState } from 'react';
import './AddItem.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddItem = ({ onClose, user }) => { 
    const navigate = useNavigate();
    const [postData, setPostData] = useState({
        title: '',
        content: '',
        tags: '',
        //user: user
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!postData.title.trim() || !postData.content.trim() || !postData.tags.trim()) {
            alert('Please ensure that all fields are filled.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8082/PostRoutes', postData);
            console.log(response.data);
            {/* removed onAdd(postData); */}
            setPostData({
                title: '',
                content: '',
                tags: ''
            });
            onClose();
        } catch (error) {
            console.error('Unable to add posts.', error);
        }
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