import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ActorDetail from '@pages/ActorDetail';
import Home from '@pages/Home';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/detail">
          <ActorDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
