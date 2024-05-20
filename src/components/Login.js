import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignIn,setSignIn] = useState(true);
  const toggleUserAuth = ()=>{
    setSignIn(!isSignIn);
  }
  return (
    <div className='relative'>
      <Header/>
      <div className='absolute'>
        <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt='bg-logo'
        />
      </div>
      <form className='absolute my-36 right-0 left-0 mx-auto w-3/12 bg-black p-12 rounded-lg bg-opacity-80'>
        <h1 className='text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input className='p-4 py-2 my-4 w-full bg-gray-700' placeholder='Full Name' type='text'/>}
        <input className='p-4 py-2 my-4 w-full bg-gray-700' placeholder='Email' type='email'/>
        <input className='p-4 py-2 my-4 w-full  bg-gray-700' placeholder='Password' type='password'/>
        <button className='p-4 py-2 my-6 bg-red-700 w-full rounded-lg text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white cursor-pointer'
        onClick={toggleUserAuth}>{isSignIn ? 'New to Netflix? Sign Up': 'Already user? Sign In'}</p>
      </form>
    </div>
  )
}

export default Login