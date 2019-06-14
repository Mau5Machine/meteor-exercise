import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { render } from 'react-dom';
import { routes, onAuthChange } from '../imports/routes/routes';
// import App from '/imports/ui/App'

Meteor.startup(() => {
  Tracker.autorun(() => {
    const appTitle = 'Meteor Exercise';
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
    render(routes, document.getElementById('react-target'));
  });
});
