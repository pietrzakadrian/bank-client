/**
 *
 * ForgotPasswordAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { previousStepAction } from 'containers/App/actions';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import { makeSelectCurrentStep } from 'containers/RegisterPage/selectors';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import {
  StyledFormActionsWrapper,
  StyledButton,
  StyledError,
} from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { getRequestName } from 'helpers';
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_ERROR } from 'containers/ForgetPasswordPage/constants';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import messages from './messages';
import {  forgotPasswordAction } from 'containers/ForgetPasswordPage/actions';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(getRequestName(FORGOT_PASSWORD_REQUEST)),
  error: makeSelectError(getRequestName(FORGOT_PASSWORD_ERROR)),
});

function ForgotPasswordAction({onValidateFields}) {
  const { isLoading, error } = useSelector(stateSelector);


  return (
    <StyledFormActionsWrapper>
      <StyledButton onClick={onValidateFields}      disabled={isLoading || !!error}  type="primary"      onClick={onValidateFields}
        errored={error ? 1 : 0}>
        {isLoading && (<LoadingIndicator />)}

        {error && <StyledError>{error}</StyledError>}

        {!error && !isLoading && (    <>        <FormattedMessage {...messages.action} /> <RightOutlined /></>)} 

      </StyledButton>
    </StyledFormActionsWrapper>

  );
}

ForgotPasswordAction.propTypes = {
  onValidateFields: PropTypes.func.isRequired,
};

export default ForgotPasswordAction;
