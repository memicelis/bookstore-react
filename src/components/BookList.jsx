import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const BookList = () => {
  const booksData = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const books = Object.keys(booksData).map((key) => {
    const book = booksData[key][0];
    return {
      item_id: key, // Include item_id as a property
      ...book, // Include other book properties
    };
  });
  return (
    <div className="bookListContainer">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <hr className="bookListDivider" />
      <CreateNewBook />
    </div>
  );
};

export default BookList;
