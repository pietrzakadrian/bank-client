/**
 *
 * RegisterStep
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRegistrationPage } from 'app/containers/RegistrationPage/selectors';
import { StyledSteps } from 'app/components/Steps/styled';

interface Props {
  steps: any;
}

export function RegistrationStep({ steps }: Props) {
  const { pinCode, currentStep } = useSelector(selectRegistrationPage);

  return (
    <StyledSteps current={currentStep}>
      {steps.map((item, index) => (
        <StyledSteps.Step
          status={steps.length === index + 1 && pinCode ? 'finish' : undefined}
          title={item.title}
          key={item.id}
        />
      ))}
    </StyledSteps>
  );
}
