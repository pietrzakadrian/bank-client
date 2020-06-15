import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import { StyledSteps } from 'components/Steps/Steps.style';
import steps from './Steps';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterStep() {
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
