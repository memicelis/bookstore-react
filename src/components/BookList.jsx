import React from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const BookList = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century ',
      author: 'Suzanne Collins',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <CreateNewBook />
    </div>
  );
};

export default BookList;
