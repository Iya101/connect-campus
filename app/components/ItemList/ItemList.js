import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ posts, isLoggedIn, user, onDelete }) => {
    return (
        <ul className="posts">
            {posts.map((post) => (
                <Item
                    key={post._id}
                    id={post._id}
                    avatar={post.avatar}
                    username={post.username}
                    title={post.title}
                    content={post.content}
                    isLoggedIn={isLoggedIn}
                    user={user} 
                    onDelete={onDelete}
                    comments={post.comments}
                    likes={post.likes}
                />
            ))}
        </ul>
    );
};

export default ItemList;

