import React, { useState } from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import firebase from './Firebase'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async(e) => 
    {
      e.preventDefault()
      try 
      {
          const user = await firebase.auth().createUserWithEmailAndPassword(email, pass)
          if (user){
            alert("Account Created Successfully")
          }
      }catch (error) 
      {
          alert(error)
      }
    }
  return (
    <>
    <div className='main_container_signup'>
      <div className='header'>
        <h2>Signup</h2>
      </div>
      <div className='box'>
        <input type='text' value={name} placeholder='Username' onChange={(e) => setName(e.target.value)}></input>
      </div>
      <div className='box'>
        <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className='box'>
        <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
      </div>
      <p>Already Have An Account <Link to="/Signin">Login Now</Link> </p>
      <button onClick={submit}>SignUp</button>
    </div>
    </>
  )
}

export default Signup;