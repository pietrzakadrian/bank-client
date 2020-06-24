import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { makeSelectCurrentStep } from 'containers/PaymentPage/selectors';
import { StyledSteps } from 'components/Steps/Steps.style';
import steps from './Steps';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
});

export default function PaymentStep() {
  const { currentStep } = useSelector(stateSelector);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item) => (
        <StyledSteps.Step key={item.id} title={item.title} />
      ))}
    </StyledSteps>
  );
}
