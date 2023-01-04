import { configureStore } from "@reduxjs/toolkit";
import animeReducer from './Slice';

export const store = configureStore({
    reducer:{
        anime : animeReducer
    }
})
