import React from 'react';
import { StyledCard, StyledCardContent } from '../Card/Card.style';

export default function BankCards() {
  return (
    <StyledCard
      shadowed="true"
      darker="true"
      bordered="true"
      title="Cards"
      excluded="true"
      extra={<>New card</>}
    >
      <StyledCardContent onMouseDown={(e) => e.stopPropagation()}>
        Funkcja Karty została wyłączona.
      </StyledCardContent>
    </StyledCard>
  );
}
