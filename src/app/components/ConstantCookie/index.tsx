/**
 *
 * ConstantCookie
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { Button } from 'antd';
import { StyledConstantCookie, StyledConstantCookieActions } from './styled';

export function ConstantCookie() {
  const { t } = useTranslation();

  return (
    <StyledConstantCookie>
      <div>
        <p>{t(translations.constantCookie.description)}</p>
        <StyledConstantCookieActions>
          <Button>
            <a href="https://github.com/pietrzakadrian">
              {t(translations.constantCookie.decline)}
            </a>
          </Button>
          <Button type="primary">
            {t(translations.constantCookie.accept)}
          </Button>
        </StyledConstantCookieActions>
      </div>
    </StyledConstantCookie>
  );
}
