import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Progress from './Progress';
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
      <div className={styles.bookCardDescription}>
        <p className={styles.category}>{category}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.author}>{author}</p>
        <div className={styles.buttonContainer}>
          <button type="button">Comments</button>
          <hr />
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <hr />
          <button type="button">Edit</button>
        </div>
      </div>
      <Progress />
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
