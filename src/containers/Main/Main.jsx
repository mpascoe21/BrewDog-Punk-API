import React from 'react';
import CardList from '../../component/CardList/CardList';
import styles from './Main.module.scss';
import NotFound from '../../component/NotFound';

const Main = (props) => {
  const { beers } = props;

  const contenJsx = beers.length ? (<section><h1 className={styles.header}>Brewdog Beers</h1>
  <CardList beers={beers} /></section>) : ( <NotFound /> );
 
  return (
    
    <section className={styles.main}>
      {contenJsx}      
    </section>
  )
}

export default Main
