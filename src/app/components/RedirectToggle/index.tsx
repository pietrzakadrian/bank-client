/**
 *
 * RedirectToggle
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledRedirectToggle } from './styled';
import routes from 'utils/routes';
import { translations } from 'locales/i18n';
import { TogglePath } from './TogglePath';
import { selectLocation } from 'app/containers/App/selectors';
import { useSelector } from 'react-redux';

export function RedirectToggle() {
  const { t } = useTranslation();
  const location = useSelector(selectLocation);

  return (
    <StyledRedirectToggle>
      {location?.pathname === routes.login.path ? (
        <>
          {t(translations.redirectToggle.registrationContent)}{' '}
          <TogglePath
            name={t(translations.redirectToggle.registration)}
            path={routes.registration.path}
          />
        </>
      ) : (
        <>
          {t(translations.redirectToggle.loginContent)}{' '}
          <TogglePath
            name={t(translations.redirectToggle.login)}
            path={routes.login.path}
          />
        </>
      )}
    </StyledRedirectToggle>
  );
}
