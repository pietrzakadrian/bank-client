import React from 'react';
import { StyledSpin, StyledLoadingOutlined } from './styles';

export default function LoadingIndicator() {
  const spinIcon = <StyledLoadingOutlined spin />;

  return <StyledSpin indicator={spinIcon} />;
}
