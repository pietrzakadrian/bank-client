/**
 *
 * Credits
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import {
  StyledButton,
  StyledButtonContent,
} from 'app/components/App/Button/styled';
import { StyledCard, StyledCardContent } from 'app/components/App/Card/styled';
import { LineChartOutlined } from '@ant-design/icons';

export function Credits() {
  const { t } = useTranslation();

  return (
    <StyledCard
      darked="true"
      bordered="true"
      title={t(translations.credits.title)}
      excluded="true"
      shadowed="true"
      extra={
        <StyledButton type="link">
          <StyledButtonContent onMouseDown={e => e.stopPropagation()}>
            <LineChartOutlined /> <span>{t(translations.credits.action)}</span>
          </StyledButtonContent>
        </StyledButton>
      }
    >
      <StyledCardContent onMouseDown={e => e.stopPropagation()}>
        <span>{t(translations.credits.description)}</span>
      </StyledCardContent>
    </StyledCard>
  );
}
