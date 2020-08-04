/**
 *
 * PaymentStep
 *
 */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { selectPaymentPage } from 'app/containers/PaymentPage/selectors';
import { StyledSteps } from 'app/components/Steps/styled';

interface Props {
  steps: any;
}

export function PaymentStep({ steps }: Props) {
  const { currentStep } = useSelector(selectPaymentPage);

  return (
    <StyledSteps current={currentStep}>
      {steps.map(item => (
        <StyledSteps.Step key={item.id} title={item.title} />
      ))}
    </StyledSteps>
  );
}
