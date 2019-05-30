import React, { useState, useEffect } from 'react';

import { auth, googleProvider } from '../firebase';



const SignUp = (props) => {

    // local states for signing up with email/password

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    const [market, setMarket] = useState(false);
    const [vendor, setVendor] = useState(false);


    // using google sign up authentication

    const signUpWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then(({user}) => {
            console.log("user:", user);
            })
            .catch(err => {
                console.log(err.message)
            })   
    }
    
    // using firebase auth method to register new user via email password

    const signUpWithEmailAndPassword = () => {
  
        auth.createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user)
            })
            .catch(err => {
                console.log(err);
            })
     }


    return (
        <div>
            <form autoComplete="off">
                <input
                    label="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                 />
                 <input
                    label="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                 />
                 <button type='button' onClick={signUpWithEmailAndPassword}>
                    Sign Up
                </button>
            </form>
            <button type='button' onClick={signUpWithGoogle}>
                Sign Up with Google
            </button>
        </div>
    )
}


export default SignUp;