import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { format, getHours } from 'date-fns';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { FormattedMessage } from 'react-intl';
import {
  StyledGreeting,
  StyledNameWrapper,
  StyledLastSuccessfulLoggedDateWrapper,
  StyledLastFailedLoggedDate,
} from './Greeting.style';
import messages from './messages';

const dateFormat24Hour = `dd.MM.yyyy, HH:mm`;
const dateFormat12Hour = `dd.MM.yyyy, hh:mm aa`;

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
        <>
          <FormattedMessage {...messages.lastSuccessfulLogin} />{' '}
          <StyledLastSuccessfulLoggedDateWrapper>
            {format(
              new Date(user?.userAuth?.lastSuccessfulLoggedDate),
              locale === 'en' ? dateFormat12Hour : dateFormat24Hour,
            )}
          </StyledLastSuccessfulLoggedDateWrapper>
        </>
      )}

      {user?.userAuth?.lastFailedLoggedDate && (
        <>
          <FormattedMessage {...messages.lastFailedLogin} />{' '}
          <StyledLastFailedLoggedDate>
            {format(
              new Date(user?.userAuth?.lastFailedLoggedDate),
              locale === 'en' ? dateFormat12Hour : dateFormat24Hour,
            )}
          </StyledLastFailedLoggedDate>
        </>
      )}
    </StyledGreeting>
  );
}
