import React, { useState } from "react";
import firebase from "./Firebase";
import "./Login.css";

export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  
    const submit = async (e) => {
      e.preventDefault();
  
      try {
        const user = await firebase.auth().createUserWithEmailAndPassword(email, pass);
        if (user) {
          alert('Account Created Successfully');
          setName('');
          setEmail('');
          setPass('');
        }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
        <div className="auth-form-container">
        <form className="register-form">
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
            <button className="sign-up-btn" onClick={submit}>Sign Up</button>
        </form>
        <button className="link-btn2" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
    </div>
    )
}