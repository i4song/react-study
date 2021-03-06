import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Main from './Main';
import Counter from './useState/Counter';
import MyForm from './useState/MyForm';
import CounterReducer from './useReducer/Counter';
import ReducerSample from './useReducer/ReducerSample';

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Main}></Route>
        <Route path="/useState/counter" component={Counter}></Route>
        <Route path="/useState/myform" component={MyForm}></Route>
        <Route path="/useReducer/counter" component={CounterReducer}></Route>
        <Route path="/useReducer/sample" component={ReducerSample}></Route>
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
