import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectPinCode } from 'containers/RegisterPage/selectors';
import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import messages from './messages';
import {
  StyledResult,
  StyledPinCodeWrapper,
  StyledSubTitle,
  StyledAction,
} from './SuccessfulResult.style';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
});

export default function SuccessfulResult() {
  const { pinCode } = useSelector(stateSelector);

  return (
    <>
      <FormattedMessage {...messages.title}>
        {(title) => <StyledResult status="success" title={title} />}
      </FormattedMessage>

      <StyledSubTitle>
        <FormattedMessage
          {...messages.subtitle}
          values={{
            pinCode: <StyledPinCodeWrapper>{pinCode}</StyledPinCodeWrapper>,
          }}
        />
      </StyledSubTitle>

      <StyledAction>
        <Button type="primary">
          <FormattedMessage {...messages.action} />
        </Button>
      </StyledAction>
    </>
  );
}
