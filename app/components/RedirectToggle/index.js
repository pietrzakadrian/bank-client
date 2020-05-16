/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledRedirectToggle } from './RedirectToggle.style';
import { makeSelectLocation } from '../../containers/App/selectors';
import TogglePath from './TogglePath';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

export default function RedirectToggle() {
  const {
    location: { pathname },
  } = useSelector(stateSelector);

  return (
    <StyledRedirectToggle>
      {pathname === '/login' ? (
        <>
          If you do not have an account in our bank, you can create now by
          clicking on <TogglePath name="Register" path="/register" />
        </>
      ) : (
        <>
          If you already have a bank account, you can log in by clicking on{' '}
          <TogglePath name="Log In" path="/login" />
        </>
      )}
    </StyledRedirectToggle>
  );
}
