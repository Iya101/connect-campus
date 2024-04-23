
import React from 'react';
import './Comment.css'; 

const Comment = ({ username, content }) => {
    return (
        <div className="comment">
            <span className="comment-username">{username}:</span>
            <span className="comment-content">{content}</span>
        </div>
    );
};

export default Comment;
