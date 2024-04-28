import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contect/UserContext';
import axios from 'axios';

const Signup = () => {
    const { serUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        try {
            await axios.post('http://localhost:8082/login', {
                email: formData.email,
                password: formData.password
            });
       setUserData({
        token:loginRes.data.token,
        user: loginRe.data.user,
       });
       localStorage.setItem("auth-token", loginRes.data.token);
       router.push('/'); // need to add the hompage to dis
    } catch (error) {
        console.error('Signup failed:', error);
    }
     };
    



function Signup() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Signing up with:', email, username); // Logging for demonstration
        navigate('/');
    };

    return (
        <div className="auth-container"> {/* Make sure this class is applied for container styling */}
            <h2>Signup</h2>
            <form onSubmit={handleSubmit} className="auth-form"> {/* Apply the auth-form class here */}
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
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
};
export default Signup;
