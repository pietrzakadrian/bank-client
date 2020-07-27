import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectPinCode } from 'containers/RegisterPage/selectors';
import { FormattedMessage } from 'react-intl';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import { loginExpressAction } from 'containers/RegisterPage/actions';
import {
  StyledButton,
  StyledError,
  StyledFormActionsWrapper,
} from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  LOGIN_EXPRESS_ERROR,
  LOGIN_EXPRESS_REQUEST,
} from 'containers/RegisterPage/constants';
import messages from './messages';
import {
  StyledResult,
  StyledPinCodeWrapper,
  StyledSubTitle,
  StyledAction,
} from './styles';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  isLoading: makeSelectIsLoading(getRequestName(LOGIN_EXPRESS_REQUEST)),
  error: makeSelectError(getRequestName(LOGIN_EXPRESS_ERROR)),
});

export default function SuccessfulResult() {
  const { pinCode, isLoading, error } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onLoginExpress = () => dispatch(loginExpressAction());

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

      <StyledFormActionsWrapper>
        <StyledAction>
          <StyledButton
            disabled={isLoading || !!error}
            type="primary"
            onClick={onLoginExpress}
            errored={error ? 1 : 0}
          >
            {(error && <StyledError>{error}</StyledError>) ||
              (isLoading && <LoadingIndicator />) ||
              (!isLoading && !error && (
                <FormattedMessage {...messages.action} />
              ))}
          </StyledButton>
        </StyledAction>
      </StyledFormActionsWrapper>
    </>
  );
}
