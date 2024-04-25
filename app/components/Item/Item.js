import React, { useState } from 'react';
import './Item.css'; 

const Item = ({ id, avatar, username, title, content, isLoggedIn, user, onDelete }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [avatarUrl, setAvatarUrl] = useState(avatar);
    const [editPost, setEditPost] = useState(null);
    const [postTitle, setPostTitle] = useState(title);
    const [postContent, setPostContent] = useState(content);

    const handleDelete = () => {
        onDelete(id);
    };
    const handleEdit = (postId) => {
        setEditPost(postId);
    };

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setPostContent(event.target.value);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();

        setPostTitle(postTitle);
        setPostContent(postContent);
        setEditPost(false);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (comment.trim()) {
            const newComment = { username: 'Default User', content: comment }; // Replace 'Logged-in User' with actual user data if available
            setComments(prevComments => [...prevComments, newComment]);
            setComment('');
        }
    };

    const defaultAvatar = 'https://res.cloudinary.com/degakxo0q/image/upload/v1713913695/d7230a1182cd6224fc680eed55cc77c8_kchop5.jpg';
      
    const handleAvatarError = () => {
        setAvatarUrl(defaultAvatar);
    };

    return (
        <li className="user-post">
            <div className="user-info">
                <div className="container">
                <img 
                    src={avatarUrl} 
                    onError={handleAvatarError} 
                    alt="User Avatar" 
                    className="user-avatar" 
                />
                <span className="username">{username}</span>
           
                 </div>
                {username === 'Default User' && (
                    <div className="button-container">
                        <button class="edit-button" onClick={() => handleEdit(id)}>Edit</button>
                        <button class="delete-button" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                )}
            </div>
            {editPost === id && username === 'Default User' ? (
                <div>
                    <form onSubmit={handleEditSubmit} className="edit">
                        <input 
                            type="text"
                            value={postTitle}
                            className="edit-title"
                            onChange={handleTitleChange}
                        />
                        <textarea 
                            value={postContent}
                            className="edit-content"
                            onChange={handleContentChange}
                        />
                        <button type="submit" className="edit-submit">Post</button>
                    </form>
            
            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        <span className="comment-username">{comment.username}: </span>
                        <span className="comment-content">{comment.content}</span>
                    </div>
                ))}
            </div>
        </div>
            ) : (
                <div>
                <h2 className="post-title">{postTitle}</h2>
                <p className="post-content">{postContent}</p>
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
                    <p className="login-prompt">Please log in to comment.</p>
                )}
                </div>
            </div>
            )}
        </li>
    );
};

export default Item;
