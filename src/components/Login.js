import React, { useRef } from 'react'
import Header from './Header'
import { useState} from 'react';
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn,setSignIn] = useState(true);
  const [errMsg,setErrMsg] = useState(null);
  const toggleUserAuth = ()=>{
    setSignIn(!isSignIn);
  }
  const userName = useRef()
  const email = useRef();
  const password = useRef();
  const handleSubmit = ()=>{
    //form validation
    const message = checkValidData(email.current.value,password.current.value);
    setErrMsg(message);
    if(message) return;

    if(!isSignIn){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userName.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKJGfvf4mBS3BULKyjeejose0w2wVJ3x6t3C6EAByeDFPlJ_kNK=s96-c"
        }).then(() => {
          // Profile updated!
          // ...
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
          navigate('/browse');
        }).catch((error) => {
          // An error occurred
          // ...
          setErrMsg(error.message);
        });
        // ...
        console.log(user);
        // navigate('/browse');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrMsg(errorCode+"-"+errorMessage);
      });
    }
    if(isSignIn){
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      navigate('/browse');
    // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrMsg(errorCode+"-"+errorMessage);
      });
    }
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
      <form onSubmit={(e)=>e.preventDefault()} className='absolute my-36 right-0 left-0 mx-auto w-3/12 bg-black p-12 rounded-lg bg-opacity-80 text-white'>
        <h1 className='text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && <input ref={userName} className='p-4 py-2 my-4 w-full bg-gray-700' placeholder='Full Name' type='text'/>}
        <input 
          className='p-4 py-2 my-4 w-full bg-gray-700' 
          placeholder='Email' type='email'
          ref={email}
        />
        <input 
          className='p-4 py-2 my-4 w-full  bg-gray-700' 
          placeholder='Password' type='password'
          ref={password}
        />
        <p className='text-red-600 font-lg'>{errMsg}</p>
        <button onClick={handleSubmit} className='p-4 py-2 my-6 bg-red-700 w-full rounded-lg text-white'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white cursor-pointer'
        onClick={toggleUserAuth}>{isSignIn ? 'New to Netflix? Sign Up': 'Already user? Sign In'}</p>
      </form>
    </div>
  )
}

export default Login