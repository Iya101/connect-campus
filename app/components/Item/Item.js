import React, { useState } from 'react';
import './Item.css';

const Item = props => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState(props.comments || []);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            setComments([...comments, { username: 'CurrentUsername', content: comment }]);
            setComment('');
        }
    };

    return (
        <li key={props.id} className="user-post">
            <div className="user-info">
                <span className="username">{props.username}</span>
                <img src={props.avatar} alt="User Avatar" className="user-avatar" />
            </div>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-content">{props.content}</p>
            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <span className="comment-username">{comment.username}: </span>
                        <span className="comment-content">{comment.content}</span>
                    </div>
                ))}
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
            </div>
        </li>
    );
}

export default Item;

