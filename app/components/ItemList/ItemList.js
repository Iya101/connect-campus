import React from 'react';
import Item from './Item';

const ItemList = ({ posts }) => {
    return (
        <div className="posts">
            <ul>
                {posts.map(post => (
                    <Item
                        key={post.id}
                        id={post.id}
                        avatar={post.avatar}
                        name={post.username}
                        title={post.title}
                        content={post.content}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;