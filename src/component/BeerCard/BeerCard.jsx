import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {
  const { name, image_url, tagline, description, abv, food_pairing } =
    props.beer;

  const shortenDescription = (description) =>
    description.length < 100
      ? description
      : description.substring(0, 100) + "...";

  return (
    // <p>BeerCard work</p>
    <div className={styles.beerCard}>
      <p className={styles.beerName}>{name}</p>
      <p className={styles.beerTagline}>{tagline}</p>
      <img className={styles.beerImg} src={image_url} alt={name} />
      <div className={styles.beerInfo}>
        
        <p className={styles.beerDescripption}>
          {shortenDescription(description)}
        </p>
        <p className={styles.beerABV}>{abv}%</p>
        {/* <p className={styles.beerFoodParing}>{food_pairing}</p> */}
        <p className={styles.goesWith}>Great with:</p>
        <ul className={styles.beerFoodParing}>
          {food_pairing.map((foodPair) => {
            return <li>{foodPair}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
