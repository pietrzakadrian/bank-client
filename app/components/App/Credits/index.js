import React from 'react';
import { FormattedMessage } from 'react-intl';
import { LineChartOutlined } from '@ant-design/icons';
import { StyledCard, StyledCardContent } from 'components/App/Card/styles';
import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/styles';
import messages from './messages';

export default function Credits() {
  return (
    <FormattedMessage {...messages.title}>
      {(title) => (
        <StyledCard
          darker="true"
          bordered="true"
          title={title}
          excluded="true"
          shadowed="true"
          extra={
            <StyledButton type="link">
              <StyledButtonContent onMouseDown={(e) => e.stopPropagation()}>
                <LineChartOutlined /> <FormattedMessage {...messages.action} />
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
