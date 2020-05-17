import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import {
  nextStepAction,
  previousStepAction,
  loginAction,
} from 'containers/LoginPage/actions';
import {
  makeSelectIsLoading,
  makeSelectCurrentStep,
} from 'containers/LoginPage/selectors';
import steps from 'components/LoginStep/Steps';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

import {
  StyledFormActionsWrapper,
  StyledButton,
} from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(),
  currentStep: makeSelectCurrentStep(),
});

export default function LoginAction({ form }) {
  const { isLoading, currentStep } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onValidateFields = async () => {
    try {
      await form.validateFields();

      if (currentStep === steps.length - 1) {
        dispatch(loginAction());
      } else {
        dispatch(nextStepAction());
      }
    } catch (error) {
      Error(error);
    }
  };
  const onPreviousStep = () => dispatch(previousStepAction());

  return (
    <StyledFormActionsWrapper>
      <StyledButton
        disabled={isLoading}
        type="primary"
        onClick={onValidateFields}
      >
        {(currentStep < steps.length - 1 && (
          <>
            <FormattedMessage {...messages.next} /> <RightOutlined />
          </>
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
