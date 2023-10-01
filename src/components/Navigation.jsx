import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <>
    <nav className={styles.navigation}>
      <h1 className={styles.navName}>Bookstore CMS</h1>
      <ul>
        <li>
          <Link className={styles.books} to="/">BOOKS</Link>
        </li>
        <li>
          <Link className={styles.categories} to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navigation;
