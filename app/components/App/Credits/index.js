import React from 'react';
import { StyledCard, StyledCardContent } from '../Card/Card.style';

export default function Credits() {
  return (
    <StyledCard
      darker="true"
      bordered="true"
      title="Credits"
      excluded="true"
      shadowed="true"
      extra={<>New credit</>}
    >
      <StyledCardContent onMouseDown={(e) => e.stopPropagation()}>
        Funkcja Kredyty została wyłączona.
      </StyledCardContent>
    </StyledCard>
  );
}
