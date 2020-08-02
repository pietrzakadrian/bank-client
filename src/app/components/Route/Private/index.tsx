/**
 *
 * Private
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import routes from 'utils/routes';
import { Route, Redirect } from 'react-router-dom';

//todo: create interface
export function Private({ component: Component, ...rest }) {
  const { isLogged } = useSelector(selectApp);

  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? <Component {...props} /> : <Redirect to={routes.home.path} />
      }
    />
  );
}
