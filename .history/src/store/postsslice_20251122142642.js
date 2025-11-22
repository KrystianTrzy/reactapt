import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPosts = createAsyncThunk(
'posts/fetchPosts',
async () => {
    const response = await axios.get('https://api.example.com/posts');
    const data = await response.json();
    return data;
}

);