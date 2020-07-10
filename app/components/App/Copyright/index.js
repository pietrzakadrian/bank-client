import React from 'react';
import { StyledCopyright } from './Copyright.style';

export default function Copyright() {
  return (
    <StyledCopyright>
      Copyright &copy; {new Date().getFullYear()}. Made by{' '}
      <a href="https://github.com/pietrzakadrian" target="_blank">
        Adrian Pietrzak
      </a>
    </StyledCopyright>
  );
}
