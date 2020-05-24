import React from 'react';
import { StyledSpin, StyledLoadingOutlined } from './LoadingIndicator.style';

export default function LoadingIndicator() {
  const spinIcon = <StyledLoadingOutlined spin />;

  return <StyledSpin indicator={spinIcon} />;
}
