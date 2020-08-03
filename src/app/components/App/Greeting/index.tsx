/**
 *
 * Greeting
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { format, getHours } from 'date-fns';
import {
  StyledGreeting,
  StyledNameWrapper,
  StyledLastSuccessfulLoggedDateWrapper,
  StyledLastFailedLoggedDate,
} from './styled';
import { translations } from 'locales/i18n';

export function Greeting() {
  const { t } = useTranslation();
  const { user } = useSelector(selectApp);
  const { dateFormat } = useSelector(selectLanguage);

  return (
    <StyledGreeting>
      <div>
        {getHours(new Date()) > 20
          ? t(translations.greeting.goodEvening)
          : t(translations.greeting.goodMorning)}
        ,{' '}
        <StyledNameWrapper>
          {user?.firstName} {user?.lastName}
        </StyledNameWrapper>
      </div>

      {user?.userAuth?.lastSuccessfulLoggedDate && (
        <div>
          {t(translations.greeting.lastSuccessfulLogin)}{' '}
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
          {t(translations.greeting.lastFailedLogin)}{' '}
          <StyledLastFailedLoggedDate>
            {format(new Date(user?.userAuth?.lastFailedLoggedDate), dateFormat)}
          </StyledLastFailedLoggedDate>
        </div>
      )}
    </StyledGreeting>
  );
}
