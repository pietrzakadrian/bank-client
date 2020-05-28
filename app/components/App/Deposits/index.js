import React from 'react';
import { StyledCard, StyledCardContent } from '../Card/Card.style';

export default function Deposits() {
  return (
    <StyledCard
      darker="true"
      bordered="true"
      title="Deposits"
      excluded="true"
      extra={<>New deposit</>}
      shadowed="true"
    >
      <StyledCardContent onMouseDown={(e) => e.stopPropagation()}>
        Funkcja Depozyty została wyłączona.
      </StyledCardContent>
    </StyledCard>
  );
}
