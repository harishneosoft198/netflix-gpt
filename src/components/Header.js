import React,{useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {addUser, removeUser} from '../utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import {SUPPORTED_LANGUAGES} from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  const language = useRef();
  const handleSignOut = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }
  const handleGptToggle = ()=>{
    dispatch(toggleGptSearch());
  }
  const onChangeLanguage = ()=>{
    dispatch(changeLanguage(language.current.value));
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
        <div className='flex align-middle p-2'>
          {showGptSearch &&
            <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={onChangeLanguage}
                ref={language}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
            </select>
          }
          <button onClick={handleGptToggle} className='bg-purple-700 text-white py-1 px-4 rounded-lg mr-4 h-[38px]'>
            {showGptSearch ? 'Home page' : 'Gpt Search'}
          </button>
          
          <img src={user?.photoURL} alt="profile" className='w-[60px] h-[60px]' />
          <button className='text-white' onClick={handleSignOut}>(Sign Out)</button>
        </div>
        }
    </div>
  )
}

export default Header