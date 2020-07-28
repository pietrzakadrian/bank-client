/**
 *
 * Header
 *
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledImg } from './styled';
import icon from 'app/images/icon.png';
import logo from 'app/images/logo.png';

export function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledImg
          width="180"
          height="100%"
          src={logo}
          alt="Bank Application"
        />
      </Link>

      <StyledImg width="50" height="100%" src={icon} alt="Adrian Pietrzak" />
    </StyledHeader>
  );
}
