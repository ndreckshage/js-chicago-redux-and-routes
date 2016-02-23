import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import { connect } from 'react-redux';

const Layout = props => (
  <div>
    <div>
      <Link to="/">Page 1</Link>
      <Link to="/page-2">Page 2</Link>
    </div>
    {props.children}
  </div>
);

const PageOne = props => {
  const { dispatch, app: { counter } } = props;
  const incr = () => { dispatch({ type: 'incr' }); };
  return (
    <div>
      <p>Page 1</p>
      <p>Counter {counter}</p>
      <button onClick={incr}>+</button>
    </div>
  );
};

const PageOneContainer = connect(state => state)(PageOne);

const PageTwo = () => <div><p>Page 2</p></div>;

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={PageOneContainer} />
    <Route path="/page-2" component={PageTwo} />
  </Route>
);
