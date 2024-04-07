import React from 'react';
import './Item.css';

const Item = props => {
    return (
        <li key={props.id} className ="user-post">
            <div className="user-info">
                <img src={props.avatar} alt="User Avatar" className="user-avatar" />
                <span className="username">{props.username}</span>
            </div>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-content">{props.content}</p>
        </li>
    );
}

export default Item;