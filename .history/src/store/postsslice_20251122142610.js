import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
'posts/fetchPosts',
async () => {
    const response = await fetch('https://api.example.com/posts');
}

);