import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/PaymentPage/selectors';
import { StyledSteps } from 'components/RegisterForm/RegisterForm.style';
import steps from './Steps';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function PaymentStep() {
  const { currentStep } = useSelector(stateSelector);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item, index) => (
        <StyledSteps.Step
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title={item.title}
        />
      ))}
    </StyledSteps>
  );
}
