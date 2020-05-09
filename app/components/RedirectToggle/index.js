/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { push } from 'connected-react-router';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { makeSelectLocation } from '../../containers/App/selectors';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

function RedirectToggle() {
  const {
    location: { pathname },
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  // eslint-disable-next-line react/prop-types
  const TogglePath = ({ name, path }) => (
    <button type="button" onClick={() => dispatch(push(path))}>
      {name}
    </button>
  );

  return (
    <div>
      {pathname === '/login' ? (
        <div>
          If you do not have an account in our bank, you can create now by
          clicking on <TogglePath name="Register" path="/register" />
        </div>
      ) : (
        <div>
          If you already have a bank account, you can log in by clicking on{' '}
          <TogglePath name="Login" path="/login" />
        </div>
      )}
    </div>
  );
}

RedirectToggle.propTypes = {};

export default RedirectToggle;
