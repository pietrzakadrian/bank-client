/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { StyledRedirectToggle, StyledButton } from './RedirectToggle.style';
import { makeSelectLocation } from '../../containers/App/selectors';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

const TogglePath = ({ name, path }) => {
  const dispatch = useDispatch();

  return (
    <StyledButton type="link" onClick={() => dispatch(push(path))}>
      {name}
    </StyledButton>
  );
};

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

TogglePath.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
