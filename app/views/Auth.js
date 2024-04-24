import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(); // Call the onLogin function passed as a prop
        navigate('/'); // Redirect to the home page
    };

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
            </form>
            <button onClick={toggleAuthMode} className="auth-toggle-button">
                {isLogin ? 'Create an account' : 'Back to login'}
            </button>
        </div>
    );
}

export default Auth;


