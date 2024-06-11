import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/');
      }
    });
    //unsubscribe when component unmounts
    return ()=>{
      unsubscribe();
    }
  },[])
  return (
    <div className='fixed z-10 bg-gradient-to-b from-black flex justify-between w-[100%]'>
        <img 
        src={LOGO}
        alt='logo'
        className='w-36'
        />
        {user && 
        <div className='flex justify-between align-middle'>
          <img src={user?.photoURL} alt="profile" className='w-[60px] h-[60px]' />
          <button className='text-black' onClick={handleSignOut}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header