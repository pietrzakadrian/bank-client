/**
 *
 * Deposits
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { StyledCard, StyledCardContent } from 'app/components/App/Card/styled';
import { BankOutlined } from '@ant-design/icons';
import {
  StyledButton,
  StyledButtonContent,
} from 'app/components/App/Button/styled';

export function Deposits() {
  const { t } = useTranslation();

  return (
    <StyledCard
      darked="true"
      bordered="true"
      title={t(translations.deposits.title)}
      excluded="true"
      shadowed="true"
      extra={
        <StyledButton type="link">
          <StyledButtonContent onMouseDown={e => e.stopPropagation()}>
            <BankOutlined /> <span>{t(translations.deposits.action)}</span>
          </StyledButtonContent>
        </StyledButton>
      }
    >
      <StyledCardContent onMouseDown={e => e.stopPropagation()}>
        <span>{t(translations.deposits.description)}</span>
      </StyledCardContent>
    </StyledCard>
  );
}
