"use client";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Home from './views/Home.js';
import Auth from './views/Auth.js';
import AddItem from './components/AddItem/AddItem.js';
import Head from 'next/head.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
          <Route path="/auth" element={<Auth onLogin={handleLogin} />} />
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
<Head>
<link rel="icon" href="../public/favicon.ico" type="image/x-icon" />

</Head>
export default App;

