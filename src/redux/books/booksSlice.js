import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const appId = 'S8CdKcjoYMct2NuB4hW2';
const initialState = {};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`, {
    item_id: book.id, // Send the id as item_id
    title: book.title,
    author: book.author,
    category: book.category,
  });
  const adaptedBook = {
    [book.id]: [{
      author: book.author, title: book.title, category: book.category,
    }],
  };
  return adaptedBook;
});

export const removeBook = createAsyncThunk('books/deleteBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
      }))
      .addCase(removeBook.fulfilled, (state, action) => {
        const idToRemove = action.payload;
        const { [idToRemove]: deletedBook, ...updatedState } = state;
        return updatedState;
      });
  },
});

export default booksSlice.reducer;
