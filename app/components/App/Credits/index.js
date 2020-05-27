import React from 'react';
import { StyledCard } from '../Card/Card.style';

export default function Credits() {
  return (
    <StyledCard
      darker="true"
      bordered="true"
      title="Credits"
      disabled="true"
      extra={<>New credit</>}
    >
      <div>Funkcja Kredyty została wyłączona.</div>
    </StyledCard>
  );
}
