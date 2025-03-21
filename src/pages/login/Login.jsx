import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';

import './login.css';

const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    // if user is stored in localStorage stay logged in
    useEffect(() => {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            dispatch({type: 'LOGIN', payload: user});
            navigate('/');
        }
    }, [dispatch, navigate]);
    
    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch({type: 'LOGIN', payload: user});
            localStorage.setItem('currentUser', JSON.stringify(user)); //save user to local storage
            navigate('/');
        })
        .catch((error) => {
            setError(true);
        });
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin} className='login-form'>
                <input 
                type='email' 
                placeholder='email'
                onChange={e => setEmail(e.target.value)} 
                className='login-form-input' 
                />
                <input 
                type='password' 
                placeholder='password'
                onChange={e => setPassword(e.target.value)}  
                className='login-form-input' 
                />
                
                <button type='submit' className='login-formButton'>Login</button>
                {error && <span className='login-error-msg'>Invalid email or password</span>}
            </form>
        </div>
    );
};

export default Login;