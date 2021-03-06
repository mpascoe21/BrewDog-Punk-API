import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={styles.background}>
      <div className={styles.feedback}>
        <h2>Page not found</h2>
        <p>Unfortunately we couldn't find any beers matching your search</p>
      </div>
    </section>
  )
}

export default NotFound
