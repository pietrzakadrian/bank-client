import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import { StyledSteps } from 'components/Steps/styles';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterStep({ steps }) {
  const { pinCode, currentStep } = useSelector(stateSelector);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item, index) => (
        <StyledSteps.Step
          status={steps.length === index + 1 && pinCode && 'finish'}
          key={item.title.props.id}
          title={item.title}
        />
      ))}
    </StyledSteps>
  );
}

RegisterStep.propTypes = {
  steps: PropTypes.array.isRequired,
};
