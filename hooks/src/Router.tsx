import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import Counter from './useState/Counter';
function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main}></Route>
        <Route path="/useState" component={Counter}></Route>
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
