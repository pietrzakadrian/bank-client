import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BankOutlined } from '@ant-design/icons';
import { StyledCard, StyledCardContent } from 'components/App/Card/styles';
import {
  StyledButtonContent,
  StyledButton,
} from 'components/App/Button/styles';
import messages from './messages';

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
