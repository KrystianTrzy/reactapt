import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchPosts = createAsyncThunk(
'posts/fetchPosts',
async () => {
    const response = await ax
    const data = await response.json();
    return data;
}

);