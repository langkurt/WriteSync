import React, {useState} from 'react';
import {auth} from '../firebase';

const Auth = () => {

    // useState: A React hook that allows you to manage state within a functional component.
    // auth: The Firebase Authentication service exported from firebase.js.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle user sign-in
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => console.error('Error signing in', error));
    };

    // Function to handle user sign-up
    const signUp = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .catch(error => console.error('Error signing up', error));
    };

    // Two input fields for email and password. The onChange event updates the respective state.
    // Two buttons for signing in and signing up. They call the signIn and signUp functions when clicked.
    return (
        <div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="Password"/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signUp}>Sign Up</button>
        </div>
    );
};

export default Auth;