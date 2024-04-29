"use client";
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css';

function Error () {
    return (
        <div className="error-container">
            <img src={'https://cdn-icons-png.flaticon.com/512/1886/1886495.png'} alt="Error" className="error-image"/>
            <div className="error-message">
                <h1>Sorry! Something went wrong.</h1>
                <p>Please try again later.</p>
                <NavLink to="/" className="link">Home Page</NavLink>
            </div>
        </div>
    );
}

export default Error;