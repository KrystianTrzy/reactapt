import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
'posts/fetchPosts',
async () => {
    const response = await fetch('https://api.example.com/posts');
    const data = await response.json();
    return data;
}

);