import React from 'react';
import { Accounts } from 'meteor/accounts-base';

import PrepList from './components/preplist/PrepList';

const App = () => (
  <div>
    <PrepList />
    <button onClick={() => Accounts.logout()}>Logout</button>
  </div>
);

export default App;
