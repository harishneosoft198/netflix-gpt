import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  return (
    <div className='fixed z-10 bg-gradient-to-b from-black flex justify-between w-[100%]'>
        <img 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
        alt='logo'
        className='w-36'
        />
        {user && 
        <div className='flex justify-between align-middle'>
          <img src={user?.photoURL} alt="profile" />
          <button className='text-black' onClick={handleSignOut}>(Sign Out)</button>
        </div>}
    </div>
  )
}

export default Header