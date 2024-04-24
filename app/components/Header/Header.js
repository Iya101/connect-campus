"use client";
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Ensure this clears all relevant user state
    navigate('/');
  };

  // Enhanced NavLink with active styling
  const activeStyle = {
    fontWeight: "bold",
    color: "red"
  };

  return (
    <header className="header">
      <NavLink to="/" className="home-link">
        <div className="logo-and-title">
          <img 
            src="https://res.cloudinary.com/degakxo0q/image/upload/v1713913364/Gemini_Generated_Image_5fxwhq5fxwhq5fxw_pimsbl.jpg"
            alt="Campus Connect Logo"
            className="header-logo"
          />
          <h1>Campus Connect</h1>
        </div>
      </NavLink>
      <nav>
        <ul className="nav-links">
          {isLoggedIn ? (
            <>
              <li>
                <button onClick={handleLogout} id="logoutButton">Logout</button>
              </li>
              <li>
                <NavLink to="/profile" style={({ isActive }) => isActive ? activeStyle : undefined}>Profile</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink to="/auth" style={({ isActive }) => isActive ? activeStyle : undefined}>Login / Signup</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

