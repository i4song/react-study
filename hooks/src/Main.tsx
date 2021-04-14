import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

type Props = RouteComponentProps;
function Main({ match, history, location }: Props): JSX.Element {
  console.log(match);
  console.log(history);
  console.log(location);
  return (
    <div>
      <Link to="/useState/counter">useState : Counter</Link>
      <br />
      <Link to="/useState/myform">useState : MyForm</Link>
      <br />
      <Link to="/useReducer/counter">useReducer : Counter</Link>
    </div>
  );
}

export default Main;
