/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from 'containers/App/selectors';
import { useSelector } from 'react-redux';

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export default function PublicRoute({
  component: Component,
  restricted,
  ...rest
}) {
  const { isLogged } = useSelector(stateSelector);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogged && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
