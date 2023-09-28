import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'S8CdKcjoYMct2NuB4hW2';
const initialState = [];

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching books: ${error.message}`);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.payload),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => action.payload);
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
