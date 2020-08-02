/**
 *
 * Logo
 *
 */
import React from 'react';
import { StyledLogo } from './styled';
import logo from 'app/images/logo.png';

export function Logo() {
  return (
    <StyledLogo>
      <img width="150" height="auto" src={logo} alt="Bank Application" />
    </StyledLogo>
  );
}
