/**
 *
 * RedirectToggle
 *
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { routes } from 'utils';
import { makeSelectLocation } from 'containers/App/selectors';
import { StyledRedirectToggle } from './styles';
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
      {pathname === routes.login.path ? (
        <>
          <FormattedMessage {...messages.registerContent} />{' '}
          <TogglePath
            name={intl.formatMessage(messages.register)}
            path={routes.register.path}
          />
        </>
      ) : (
        <>
          <FormattedMessage {...messages.loginContent} />{' '}
          <TogglePath
            name={intl.formatMessage(messages.login)}
            path={routes.login.path}
          />
        </>
      )}
    </StyledRedirectToggle>
  );
}

RedirectToggle.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(RedirectToggle);
