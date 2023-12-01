import React from 'react'
import { Routes, Route } from 'react-router'
import Signup from './Signup'
import Signin from './Signin'

const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/Signin' element={<Signin/>}></Route>
    </Routes>
    </>
  )
}

export default Rout;