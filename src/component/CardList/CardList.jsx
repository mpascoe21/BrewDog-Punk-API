import React from 'react';
import BeerCard from '../BeerCard/BeerCard';
import styles from './CardList.module.scss';

const CardList = (props) => {
  const { beers } = props;

  const getBeerCardJsx = (beer) => (
    <div key={beer.id}>
      <BeerCard beer={beer} />
    </div>
  );

  return (
    <section className={styles.cardList}>

      {beers.map(getBeerCardJsx)}
       {/* {beers.map((beer) => {
         return <p key={beer.id}>{beer.name}</p>;
        })} */}
      {/* <BeerCard />  */}
    </section>
        
  )
}

export default CardList
