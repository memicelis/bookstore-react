import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const BookList = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <CreateNewBook />
    </div>
  );
};

export default BookList;
