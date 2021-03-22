import React from 'react';
import { Switch } from 'react-router-dom';
import Chat from '../pages/Chat';
import SignIn from '../pages/SignIn';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/chat" component={Chat} isPrivate />
  </Switch>
);

export default Routes;
