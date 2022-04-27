import React from 'react';
import { Router } from '@reach/router';

import Main from '../Main';


const Routes = (props) => {
  const { beers } = props;

  return (
    <Router>
      <Main path='/' beers={beers} />
    </Router>
  )
}

export default Routes
