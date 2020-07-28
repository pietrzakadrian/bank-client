/**
 *
 * LoadingIndicator
 *
 */
import React from 'react';
import { StyledSpin, StyledLoadingOutlined } from './styled';

export default function LoadingIndicator() {
  const spinIcon = <StyledLoadingOutlined spin />;

  return <StyledSpin indicator={spinIcon} />;
}
