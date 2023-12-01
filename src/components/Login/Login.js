import React from 'react';
import { useState } from 'react';
import "./Login.css";
import { Login } from "./Form";
import { Register } from "./Register";

function Login1() {
    const [currentForm, setCurrentForm] = useState('login');
  
    const toggleForm = (formName) => {
      setCurrentForm(formName);
    } 
    return (
      <div className="Login">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
      </div>
    );
  }
  
  export default Login1;