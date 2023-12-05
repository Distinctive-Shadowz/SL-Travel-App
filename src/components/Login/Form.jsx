import React, { useState, useEffect } from "react";
import firebase from "./Firebase";
import "./Login.css";
import { useNavigate } from "react-router-dom";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();  // Get the history object
  
    useEffect(() => {
      return () => {
        // Cleanup function to clear input fields
        setEmail('');
        setPass('');
      };
    }, []);
  
    const submit = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const user = await firebase.auth().signInWithEmailAndPassword(email, pass);
        if (user) {
          alert('Signin Successfully');
          setEmail('');
          setPass('');
          // Redirect to the home page after successful sign-in
          console.log(user);
          navigate('/');  // Redirect to '/home'
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }

      

      
    };
  

   
    return (
        <div className="auth-form-container">
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
                <button className="sign-in-btn" onClick={submit} disabled={loading}>
          {loading ? 'Signing in...' : 'Log in'}
        </button>
            </form>
            {<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> }
        </div>
    )
}