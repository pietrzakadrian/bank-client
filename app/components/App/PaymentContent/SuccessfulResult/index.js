import React from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  StyledButton,
  StyledFormActionsWrapper,
} from 'components/Form/Form.style';
import { routes } from 'utils';
import { push } from 'connected-react-router';
import messages from './messages';
import {
  StyledResult,
  StyledSubTitle,
  StyledAction,
} from './SuccessfulResult.style';

export default function SuccessfulResult() {
  const dispatch = useDispatch();

  return (
    <>
      <FormattedMessage {...messages.title}>
        {(title) => <StyledResult status="success" title={title} />}
      </FormattedMessage>

      <StyledSubTitle>
        <FormattedMessage {...messages.subtitle} />
      </StyledSubTitle>

      <StyledFormActionsWrapper>
        <StyledAction>
          <StyledButton
            type="primary"
            onClick={() => dispatch(push(routes.dashboard.path))}
          >
            Back to dashboard
          </StyledButton>
        </StyledAction>
      </StyledFormActionsWrapper>
    </>
  );
}
