import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import styles from './Book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = props;

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className={styles.bookCard}>
      <p>{title}</p>
      <p>{author}</p>
      <p>{category}</p>
      <button type="button" onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};
Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired, // 'title' prop is a required string
  author: PropTypes.string.isRequired, // 'author' prop is a required string
  category: PropTypes.string.isRequired,
};

export default Book;
