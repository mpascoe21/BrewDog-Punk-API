import React from 'react';
import styles from './App.module.scss';
import NavBar from './component/NavBar';


const App = () => {
  return (
   <>
      <section>
        <p className={styles.check}>app is working</p> 
      </section>
      <section>
        <NavBar />
      </section>
   </>
  );
}

export default App;
