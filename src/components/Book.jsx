import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.module.css';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className={styles.bookCard}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired, // 'title' prop is a required string
  author: PropTypes.string.isRequired, // 'author' prop is a required string
};

export default Book;
