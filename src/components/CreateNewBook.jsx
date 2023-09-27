import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const books = useSelector((state) => state.books);

  const handleAddBook = (e) => {
    const item_id = `item${books.length + 1}`;
    const fixedCategory = 'Fiction';
    const newBook = {
      item_id, title, author, category: fixedCategory,
    };

    dispatch(addBook(newBook));

    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button type="button" onClick={handleAddBook}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default CreateNewBook;
