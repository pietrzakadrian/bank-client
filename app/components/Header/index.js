/**
 *
 * Header
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import icon from 'images/icon.png';
import logo from 'images/logo.png';
import { StyledHeader, StyledImg } from './styles';

export default function Header() {
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
