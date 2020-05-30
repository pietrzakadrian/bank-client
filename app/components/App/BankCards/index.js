import React from 'react';
import { CreditCardOutlined } from '@ant-design/icons';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';

import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/Button.style';
import { StyledCard, StyledCardContent } from '../Card/Card.style';
import messages from './messages';

function BankCards({ intl }) {
  return (
    <StyledCard
      shadowed="true"
      darker="true"
      bordered="true"
      title={intl.formatMessage(messages.title)}
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

BankCards.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(BankCards);
