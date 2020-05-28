import React from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/Button.style';
import { StyledCard, StyledCardContent } from '../Card/Card.style';
import messages from './messages';

export default function BankCards() {
  return (
    <StyledCard
      shadowed="true"
      darker="true"
      bordered="true"
      title="Cards"
      excluded="true"
      extra={
        <StyledButton type="link">
          <StyledButtonContent onMouseDown={(e) => e.stopPropagation()}>
            <CreditCardOutlined /> <FormattedMessage {...messages.action} />
          </StyledButtonContent>
        </StyledButton>
      }
    >
      <StyledCardContent onMouseDown={(e) => e.stopPropagation()}>
        <FormattedMessage {...messages.description} />
      </StyledCardContent>
    </StyledCard>
  );
}
