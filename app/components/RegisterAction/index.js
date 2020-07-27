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
import { REGISTER_REQUEST } from 'containers/RegisterPage/constants';
import {
  CHECK_EMAIL_REQUEST,
  GET_CURRENCIES_REQUEST,
} from 'containers/App/constants';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  isLoading: makeSelectIsLoading(getRequestName(REGISTER_REQUEST)),
  error: makeSelectError([
    getRequestName(GET_CURRENCIES_REQUEST),
    getRequestName(CHECK_EMAIL_REQUEST),
    getRequestName(REGISTER_REQUEST),
  ]),
});

export default function RegisterAction({ steps, onValidateFields }) {
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
        {(error && <StyledError>{error}</StyledError>) ||
          (currentStep < steps.length - 1 && !error && (
            <>
              <FormattedMessage {...messages.next} /> <RightOutlined />
            </>
          )) ||
          (currentStep === steps.length - 1 && isLoading && (
            <LoadingIndicator />
          )) ||
          (currentStep === steps.length - 1 && !error && (
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

RegisterAction.propTypes = {
  onValidateFields: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
};
