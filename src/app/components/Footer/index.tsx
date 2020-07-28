/**
 *
 * Footer
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import {
  StyledFooter,
  StyledButton,
  StyledInfoCircleOutlined,
  StyledWarning,
  StyledTip,
} from './styled';

export function Footer() {
  const { t } = useTranslation();

  return (
    <StyledFooter>
      <StyledWarning>
        <StyledInfoCircleOutlined />
        {t(translations.footer.header)}
      </StyledWarning>

      <div>
        {t(translations.footer.subheader)}
        <ul>
          <li>{t(translations.footer.ul.li1)}</li>
          <li>{t(translations.footer.ul.li2)}</li>
        </ul>
      </div>

      <StyledTip>{t(translations.footer.warning)}</StyledTip>

      <div>
        {t(translations.footer.footer)}
        <StyledButton type="link">
          {t(translations.footer.buttonContent)}
        </StyledButton>
      </div>
    </StyledFooter>
  );
}
