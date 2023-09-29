import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const CreateNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title.trim() === '' || author.trim() === '') {
      setErrorMessage('Please fill in both title and author fields.');
      return;
    }

    const id = uuidv4();
    const fixedCategory = 'Fiction';
    const newBook = {
      id,
      title,
      author,
      category: fixedCategory,
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default CreateNewBook;
