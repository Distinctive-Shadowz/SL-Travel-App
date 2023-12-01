import React, { useState, useEffect } from "react";
import firebase from "./Firebase";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState(false);
  
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
          console.log(
            user
          )
        }
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }

      

      
    };
  

   
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form">
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
                <button onClick={submit} disabled={loading}>
          {loading ? 'Signing in...' : 'Signin'}
        </button>
            </form>
            {<button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> }
        </div>
    )
}