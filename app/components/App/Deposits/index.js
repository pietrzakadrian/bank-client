import React from 'react';
import { StyledCard } from '../Card/Card.style';

export default function Deposits() {
  return (
    <StyledCard
      darker="true"
      bordered="true"
      title="Deposits"
      disabled="true"
      extra={<>New deposit</>}
    >
      <div>Funkcja Depozyty została wyłączona.</div>
    </StyledCard>
  );
}
