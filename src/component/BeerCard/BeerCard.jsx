import React, { useState } from "react";
import styles from "./BeerCard.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as lightFaHeart } from "@fortawesome/free-regular-svg-icons";

const BeerCard = (props) => {
  const { id, name, image_url, tagline, description, abv, food_pairing, isFav } = props.beer
  //const { toggleFav, addToFav, favState } = props;
  const { toggleFav } = props;

  const [favState, setFavState] = useState(isFav);

  const handleFavClick = (e) => {
    e.stopPropagation();
    toggleFav(props.beer);
    setFavState(!isFav);
  };

  const heartIcon = favState ? solidFaHeart : lightFaHeart;

  const shortenDescription = (description) =>
    description.length < 100
      ? description
      : description.substring(0, 100) + "...";

  return (
    // <p>BeerCard work</p>
    <div className={styles.beerCard} data-testid='beerCard' key={id}>
      {/* <i className={styles.heart} onClick={() => addToFav(props.beer)}> */}
      <i className={styles.heart} onClick={handleFavClick}> 
        <FontAwesomeIcon icon={heartIcon} />
      </i>
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
