/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { routes } from 'utils';

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export default function PrivateRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const { isLogged } = useSelector(stateSelector);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to={routes.home.path} />
      }
    />
  );
}
