/**
 *
 * Public
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import routes from 'utils/routes';
import { Route, Redirect } from 'react-router-dom';

export function Public({ component: Component, restricted = false, ...rest }) {
  const { isLogged } = useSelector(selectApp);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged && restricted ? (
          <Redirect to={routes.home.path} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
