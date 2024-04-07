"use client";
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your global CSS file directly

function Header() {
  return (
    <header className="header">
      <h1>Campus Connect</h1>
      <nav>
        <ul className="nav-links">
          <li>
          <Link to="/auth">Login / Signup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
