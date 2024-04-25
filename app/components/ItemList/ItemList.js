import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ posts, isLoggedIn, user, onDelete }) => {
    return (
        <ul className="posts">
            {posts.map((post) => (
                <Item
                    key={post.id}
                    id={post.id}
                    avatar={post.avatar}
                    username={post.username}
                    title={post.title}
                    content={post.content}
                    isLoggedIn={isLoggedIn}
                    user={user} 
                    onDelete={onDelete}// Ensure this prop is passed correctly
                />
            ))}
        </ul>
    );
};

export default ItemList;

