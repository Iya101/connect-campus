import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ posts, isLoggedIn }) => {
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
                    isLoggedIn={isLoggedIn} // Ensure this prop is passed correctly
                />
            ))}
        </ul>
    );
};

export default ItemList;

