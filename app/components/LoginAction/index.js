import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  StyledError,
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { previousStepAction } from 'containers/App/actions';
import { makeSelectCurrentStep } from 'containers/LoginPage/selectors';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { getRequestName } from 'helpers';
import { LOGIN_REQUEST } from 'containers/LoginPage/constants';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  error: makeSelectError(getRequestName(LOGIN_REQUEST)),
  isLoading: makeSelectIsLoading(getRequestName(LOGIN_REQUEST)),
});

export default function LoginAction({ steps, onValidateFields }) {
  const { isLoading, currentStep, error } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onPreviousStep = () => dispatch(previousStepAction());

  return (
    <StyledFormActionsWrapper>
      <StyledButton
        disabled={isLoading || !!error}
        type="primary"
        onClick={onValidateFields}
        errored={error ? 1 : 0}
      >
        {(currentStep < steps.length - 1 && (
          <>
            <FormattedMessage {...messages.next} /> <RightOutlined />
          </>
        )) ||
          (currentStep === steps.length - 1 && isLoading && (
            <LoadingIndicator />
          )) ||
          (currentStep === steps.length - 1 && error && (
            <StyledError>{error}</StyledError>
          )) ||
          (currentStep === steps.length - 1 && (
            <FormattedMessage {...messages.create} />
          ))}
      </StyledButton>

      {currentStep > 0 && (
        <StyledButton
          disabled={isLoading}
          type="link"
          back="true"
          onClick={onPreviousStep}
        >
          <LeftOutlined /> <FormattedMessage {...messages.previous} />
        </StyledButton>
      )}
    </StyledFormActionsWrapper>
  );
}

LoginAction.propTypes = {
  onValidateFields: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
};
