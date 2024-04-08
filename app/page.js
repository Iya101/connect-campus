"use client";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './views/Home.js'; // Your home component
import Auth from './views/Auth.js'; // Your authentication component
import AddItem from './components/AddItem/AddItem.js';

function App() {
  const isLoggedIn = true; // Simulate login state

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn as a prop */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/add-item" element={<AddItem />} />
              <Route path="/logout" element={<Home />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
