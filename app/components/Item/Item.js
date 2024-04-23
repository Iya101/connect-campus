import React, { useState } from 'react';
import './Item.css'; // Ensure you have CSS for styling

const Item = ({ id, avatar, username, title, content, isLoggedIn }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            const newComment = { username: 'Logged-in User', content: comment }; // Replace 'Logged-in User' with actual user data if available
            setComments((prevComments) => [...prevComments, newComment]);
            setComment('');
        }
    };

    const defaultAvatar = 'https://res.cloudinary.com/degakxo0q/image/upload/v1713913695/d7230a1182cd6224fc680eed55cc77c8_kchop5.jpg';
      

    return (
        <li className="user-post">
            <div className="user-info">
                <img src={avatar} alt="User Avatar" className="user-avatar" />
                <span className="username">{username}</span>
            </div>
            <h2 className="post-title">{title}</h2>
            <p className="post-content">{content}</p>
            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <span className="comment-username">{comment.username}: </span>
                        <span className="comment-content">{comment.content}</span>
                    </div>
                ))}
                {isLoggedIn ? (
                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <input
                            type="text"
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Add a comment..."
                            className="comment-input"
                        />
                        <button type="submit" className="comment-submit">Post</button>
                    </form>
                ) : (
                    <p>Please log in to comment.</p>
                )}
            </div>
        </li>
    );
};

export default Item;


