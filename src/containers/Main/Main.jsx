import React from 'react';
import CardList from '../../component/CardList/CardList';
import styles from './Main.module.scss';

const Main = (props) => {
  const { beers } = props;
 
  return (
    <section className={styles.main}>
      <h1 className={styles.header}>Brewdog Beers</h1>
      <CardList beers={beers} />
    </section>
  )
}

export default Main
