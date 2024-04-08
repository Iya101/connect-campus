"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1>Campus Connect</h1>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            {isLoggedIn ? (
              // Use a button or an anchor tag for logout to prevent navigation
              <button onClick={onLogout}>Logout</button>
            ) : (
              <Link to="/auth">Login / Signup</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

