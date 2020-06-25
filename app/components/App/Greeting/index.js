import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { format, getHours } from 'date-fns';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import { FormattedMessage } from 'react-intl';
import { dateFormat } from 'helpers';
import {
  StyledGreeting,
  StyledNameWrapper,
  StyledLastSuccessfulLoggedDateWrapper,
  StyledLastFailedLoggedDate,
} from './Greeting.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  locale: makeSelectLocale(),
  user: makeSelectUser(),
});

export default function Greeting() {
  const { user, locale } = useSelector(stateSelector);

  return (
    <StyledGreeting>
      <div>
        {getHours(new Date()) > 20 ? (
          <FormattedMessage {...messages.goodEvening} />
        ) : (
          <FormattedMessage {...messages.goodMorning} />
        )}
        ,{' '}
        <StyledNameWrapper>
          {user?.firstName} {user?.lastName}
        </StyledNameWrapper>
      </div>

      {user?.userAuth?.lastSuccessfulLoggedDate && (
        <div>
          <FormattedMessage {...messages.lastSuccessfulLogin} />{' '}
          <StyledLastSuccessfulLoggedDateWrapper>
            {format(
              new Date(user?.userAuth?.lastSuccessfulLoggedDate),
              locale === 'en' ? dateFormat(12) : dateFormat(24),
            )}
          </StyledLastSuccessfulLoggedDateWrapper>
        </div>
      )}

      {user?.userAuth?.lastFailedLoggedDate && (
        <div>
          <FormattedMessage {...messages.lastFailedLogin} />{' '}
          <StyledLastFailedLoggedDate>
            {format(
              new Date(user?.userAuth?.lastFailedLoggedDate),
              locale === 'en' ? dateFormat(12) : dateFormat(24),
            )}
          </StyledLastFailedLoggedDate>
        </div>
      )}
    </StyledGreeting>
  );
}
