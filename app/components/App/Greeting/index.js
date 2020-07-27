import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { format, getHours } from 'date-fns';
import { makeSelectDateFormat } from 'providers/LanguageProvider/selectors';
import { FormattedMessage } from 'react-intl';
import {
  StyledGreeting,
  StyledNameWrapper,
  StyledLastSuccessfulLoggedDateWrapper,
  StyledLastFailedLoggedDate,
} from './styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  dateFormat: makeSelectDateFormat(),
});

export default function Greeting() {
  const { user, dateFormat } = useSelector(stateSelector);

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
              dateFormat,
            )}
          </StyledLastSuccessfulLoggedDateWrapper>
        </div>
      )}

      {user?.userAuth?.lastFailedLoggedDate && (
        <div>
          <FormattedMessage {...messages.lastFailedLogin} />{' '}
          <StyledLastFailedLoggedDate>
            {format(new Date(user?.userAuth?.lastFailedLoggedDate), dateFormat)}
          </StyledLastFailedLoggedDate>
        </div>
      )}
    </StyledGreeting>
  );
}
