import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  StyledError,
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  nextStepAction,
  previousStepAction,
  loginAction,
} from 'containers/LoginPage/actions';
import { makeSelectCurrentStep } from 'containers/LoginPage/selectors';
import { makeSelectIsLoading, makeSelectError } from 'containers/App/selectors';
import steps from 'components/LoginStep/Steps';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import messages from './messages';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  currentStep: makeSelectCurrentStep(),
  error: makeSelectError(),
});

export default function LoginAction({ form }) {
  const { isLoading, currentStep, error } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onPreviousStep = () => dispatch(previousStepAction());
  const onNextStep = () => dispatch(nextStepAction());
  const onLogin = () => dispatch(loginAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        onLogin();
      } else {
        onNextStep();
      }
    } catch (err) {
      // Error(error);
    }
  };

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
  form: PropTypes.object.isRequired,
};
