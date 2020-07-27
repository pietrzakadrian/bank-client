import React from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/styles';
import { StyledCard, StyledCardContent } from 'components/App/Card/styles';
import messages from './messages';

export default function BankCards() {
  return (
    <FormattedMessage {...messages.title}>
      {(title) => (
        <StyledCard
          shadowed="true"
          darker="true"
          bordered="true"
          title={title}
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
      )}
    </FormattedMessage>
  );
}
