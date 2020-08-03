/**
 *
 * Copyright
 *
 */
import React from 'react';
import { StyledCopyright } from './styled';

export function Copyright() {
  return (
    <StyledCopyright>
      Copyright &copy; {new Date().getFullYear()}. Made by{' '}
      <a
        href="https://github.com/pietrzakadrian"
        rel="noopener noreferrer"
        target="_blank"
      >
        Adrian Pietrzak
      </a>
    </StyledCopyright>
  );
}
