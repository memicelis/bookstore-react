import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <>
    <nav className={styles.navigation}>
      <h1>Bookstore CMS</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
