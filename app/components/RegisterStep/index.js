import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectPinCode,
  makeSelectCurrentStep,
} from 'containers/RegisterPage/selectors';
import { StyledSteps } from '../RegisterForm/RegisterForm.style';
import { steps } from './steps';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
  currentStep: makeSelectCurrentStep(),
});

export default function RegisterStep() {
  const { pinCode, currentStep } = useSelector(stateSelector);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item, i) => (
        <StyledSteps.Step
          status={steps.length === i + 1 ? pinCode && 'finish' : null}
          key={item.title}
          title={item.title}
        />
      ))}
    </StyledSteps>
  );
}
