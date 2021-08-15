import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is HOME PAGE
      </Route>

      <Route exact path="/starred">
        This is starred
      </Route>

      <Route>This is 404 PAGE</Route>
    </Switch>
  );
}

export default App;
