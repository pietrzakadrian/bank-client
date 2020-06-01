/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLogged } from 'containers/App/selectors';
import { push } from 'connected-react-router';
import { routes } from 'utils';

const stateSelector = createStructuredSelector({
  isLogged: makeSelectIsLogged(),
});

export default function HomePage() {
  const { isLogged } = useSelector(stateSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogged) {
      dispatch(push(routes.dashboard.path));
    } else {
      dispatch(push(routes.login.path));
    }
  }, [isLogged]);

  return null;
}
