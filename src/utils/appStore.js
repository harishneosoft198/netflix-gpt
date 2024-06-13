import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../utils/userSlice';
import moviesReducer from '../utils/movieSlice';
import gptReducer from '../utils/gptSlice';
import configSlice from './configSlice';

export const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        gpt:gptReducer,
        config:configSlice
    }
});

export default appStore;