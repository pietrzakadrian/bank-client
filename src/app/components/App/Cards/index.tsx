/**
 *
 * BankCards
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCard, StyledCardContent } from '../Card/styled';
import { translations } from 'locales/i18n';
import {
  StyledButton,
  StyledButtonContent,
} from 'app/components/App/Button/styled';
import { CreditCardOutlined } from '@ant-design/icons';

export function Cards() {
  const { t } = useTranslation();

  return (
    <StyledCard
      shadowed="true"
      darked="true"
      title={t(translations.cards.title)}
      excluded="true"
      extra={
        <StyledButton type="link">
          <StyledButtonContent onMouseDown={e => e.stopPropagation()}>
            <CreditCardOutlined /> <span>{t(translations.cards.action)}</span>
          </StyledButtonContent>
        </StyledButton>
      }
    >
      <StyledCardContent onMouseDown={e => e.stopPropagation()}>
        <span>{t(translations.cards.description)}</span>
      </StyledCardContent>
    </StyledCard>
  );
}
