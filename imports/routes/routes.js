import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Login from '/imports/ui/pages/Login';
import Signup from '/imports/ui/pages/Signup';
import App from '/imports/ui/App';

const history = createBrowserHistory();

const unAuthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/prep'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    history.replace('/prep');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    history.replace('/');
  }
};

export const onAuthChange = (isAuthenticated) => {
  const pathName = history.location.pathname;
  const isUnAuthenticatedPage = unAuthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  if (isUnAuthenticatedPage && isAuthenticated) {
    history.replace('/prep');
  }
  if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
};

export const routes = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Login} render={onEnterPublicPage} />
      <Route path="/signup" component={Signup} render={onEnterPublicPage} />
      <Route path="/prep" component={App} render={onEnterPrivatePage} />
    </Switch>
  </Router>
);