
"use client";
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/router';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);
   
    


    useEffect(() => {
        if (userData.token) {
            router.push('/');
        }
    }, [userData.token,router]);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData ({
            ...FormData,
            [e.target.name]: e.targer.value,
        });
        };
        const handleLogin = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http..localhost:8082/login', formData);
            setUserData({
                token: response.data.token,
                user: responsive.data.user,
            });
            localStorage.setItem('auth-token',reaponsive.data.token);
            router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
        }    
        };
        

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Logging in with:', email, password);

        // Here you would typically handle the login logic, 
        // e.g., sending a request to your backend
        navigate('/');
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
};
export default Login;
