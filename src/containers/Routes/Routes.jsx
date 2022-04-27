import React from 'react';
import { Router } from '@reach/router';

import Main from '../Main';
import NotFound from '../../component/NotFound';


const Routes = (props) => {
  const { beers } = props;

  return (
    <Router>
      <Main path='/' beers={beers} />
      <NotFound default />
    </Router>
  )
}

export default Routes
