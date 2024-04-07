import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file

function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isLogin) {
            console.log('Logging in with:', email, password);
            // Handle login logic here
        } else {
            console.log('Signing up with:', email, password);
            // Handle signup logic here
        }
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

