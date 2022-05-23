import React from "react";
import CardList from "../../component/CardList/CardList";
import styles from "./Main.module.scss";
import NotFound from "../../component/NotFound";

const Main = (props) => {
  //const { beers, toggleFav, addToFav, favState } = props;
  const { beers, toggleFav } = props;

  const contenJsx = beers.length ? (
    <section>
      <h1 className={styles.header}>Brewdog Beers</h1>
      <CardList beers={beers} toggleFav={toggleFav} />
    </section>
  ) : (
    <NotFound />
  );

  // const contenJsx = beers.length ? (
  //   <section>
  //     <h1 className={styles.header}>Brewdog Beers</h1>
  //     <CardList beers={beers} toggleFav={toggleFav} addToFav={addToFav} favState={favState} /></section>
  // ) : (
  //   <NotFound />
  // );

  return <section className={styles.main}>{contenJsx}</section>;
};

export default Main;
