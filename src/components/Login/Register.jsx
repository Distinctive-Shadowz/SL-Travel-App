import React, { useState } from "react";
import firebase from "./Firebase";

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
            <h2>Register</h2>
        <form className="register-form">
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="" id="password" name="password" />
            <button onClick={submit}>SignUp</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}