"use client";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logoImage from './Gemini_Generated_Image_5fxwhq5fxwhq5fxw.jpeg';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
      <div className="logo-and-title"> 
      <img src="https://res.cloudinary.com/degakxo0q/image/upload/v1713913364/Gemini_Generated_Image_5fxwhq5fxwhq5fxw_pimsbl.jpg"
      alt="Campus Connect Logo" 
      className="header-logo" />
      <h1>Campus Connect</h1>
    </div>
      </Link>
      <nav>
        <ul className="nav-links">
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
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
