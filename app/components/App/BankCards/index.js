import React from 'react';
import { StyledCard } from '../Card/Card.style';

export default function BankCards() {
  return (
    <StyledCard
      shadowed="true"
      darker="true"
      bordered="true"
      title="Cards"
      disabled="true"
      extra={<>New card</>}
    >
      <div>Funkcja Karty została wyłączona.</div>
    </StyledCard>
  );
}
