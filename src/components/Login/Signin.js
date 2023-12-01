import React, { useState } from 'react'
import './Signin.css'
import { Link } from 'react-router-dom'
import firebase from './Firebase'

const Signin = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const submit = async(e) => 
    {
      e.preventDefault()
      try 
      {
          const user = await firebase.auth().signInWithEmailAndPassword(email, pass)
          if (user){
            alert("Signin Successfully")
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
        <input type='email' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
      </div>
      <div className='box'>
        <input type='password' value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
      </div>
      <p>Don't Have An Account? <Link to="/">Create Account</Link> </p>
      <button onClick={submit}>Signin</button>
    </div>
    </>
  )
}

export default Signin;