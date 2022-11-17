import { configureStore } from '@reduxjs/toolkit';
import flipReducer from './flipSlice';

export default configureStore({
    reducer: {
        switch: flipReducer
    },
});