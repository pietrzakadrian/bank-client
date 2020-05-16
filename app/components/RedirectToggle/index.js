/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { StyledRedirectToggle } from './RedirectToggle.style';
import { makeSelectLocation } from '../../containers/App/selectors';
import TogglePath from './TogglePath';
import messages from './messages';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

function RedirectToggle({ intl }) {
  const {
    location: { pathname },
  } = useSelector(stateSelector);

  return (
    <StyledRedirectToggle>
      {pathname === '/login' ? (
        <>
          <FormattedMessage {...messages.registerContent} />{' '}
          <TogglePath
            name={intl.formatMessage(messages.register)}
            path="/register"
          />
        </>
      ) : (
        <>
          <FormattedMessage {...messages.loginContent} />{' '}
          <TogglePath name={intl.formatMessage(messages.login)} path="/login" />
        </>
      )}
    </StyledRedirectToggle>
  );
}

RedirectToggle.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RedirectToggle);
