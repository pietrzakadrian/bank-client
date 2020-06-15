import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectCurrentStep,
  makeSelectHasConfirmedTransaction,
} from 'containers/PaymentPage/selectors';
import { StyledSteps } from 'components/Steps/Steps.style';
import steps from './Steps';

const stateSelector = createStructuredSelector({
  currentStep: makeSelectCurrentStep(),
  hasConfirmedTransaction: makeSelectHasConfirmedTransaction(),
});

export default function PaymentStep() {
  const { currentStep, hasConfirmedTransaction } = useSelector(stateSelector);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item, index) => (
        <StyledSteps.Step
          status={
            steps.length === index + 1 && hasConfirmedTransaction && 'finish'
          }
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          title={item.title}
        />
      ))}
    </StyledSteps>
  );
}
