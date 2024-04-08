"use client";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
        <h1>Campus Connect</h1>
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


