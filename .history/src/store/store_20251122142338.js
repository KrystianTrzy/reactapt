import { configurestore } from "@reduxjs/toolkit";
import postreducer form './postsslice'

export const store = configureStore({
     reducer: {
        news: postReducer,
     },
    });