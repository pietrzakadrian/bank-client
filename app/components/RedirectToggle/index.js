/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import { StyledRedirectToggle } from './RedirectToggle.style';
import { makeSelectLocation } from '../../containers/App/selectors';
import TogglePath from './TogglePath';
import messages from './messages';

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
          <FormattedMessage {...messages.registerContent} />{' '}
          <FormattedMessage {...messages.register}>
            {(register) => <TogglePath name={register} path="/register" />}
          </FormattedMessage>
        </>
      ) : (
        <>
          <FormattedMessage {...messages.loginContent} />{' '}
          <FormattedMessage {...messages.login}>
            {(login) => <TogglePath name={login} path="/login" />}
          </FormattedMessage>
        </>
      )}
    </StyledRedirectToggle>
  );
}
