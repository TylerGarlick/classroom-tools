import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import NotFound from './components/shared/NotFound';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);