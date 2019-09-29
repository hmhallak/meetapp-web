import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import Details from '~/pages/Meetup/Details';
import New from '~/pages/Meetup/New';
import Edit from '~/pages/Meetup/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/meetup/:meetup" component={Details} isPrivate />
      <Route path="/new" component={New} isPrivate />
      <Route path="/edit/:meetup" component={Edit} isPrivate />
    </Switch>
  );
}
