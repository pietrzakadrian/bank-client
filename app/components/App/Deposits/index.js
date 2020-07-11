import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BankOutlined } from '@ant-design/icons';
import { StyledCard, StyledCardContent } from '../Card/Card.style';
import messages from './messages';
import { StyledButton, StyledButtonContent } from '../Button/Button.style';

export default function Deposits() {
  return (
    <FormattedMessage {...messages.title}>
      {(title) => (
        <StyledCard
          darker="true"
          bordered="true"
          title={title}
          excluded="true"
          extra={
            <StyledButton type="link">
              <StyledButtonContent onMouseDown={(e) => e.stopPropagation()}>
                <BankOutlined /> <FormattedMessage {...messages.action} />
              </StyledButtonContent>
            </StyledButton>
          }
          shadowed="true"
        >
          <StyledCardContent onMouseDown={(e) => e.stopPropagation()}>
            <FormattedMessage {...messages.description} />
          </StyledCardContent>
        </StyledCard>
      )}
    </FormattedMessage>
  );
}
