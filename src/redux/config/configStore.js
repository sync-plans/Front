import { configureStore } from '@reduxjs/toolkit';
import planSlice from '../modules/planSlice';

const store = configureStore({
    reducer : {
        planSlice,
    }
})

export default store