import React from 'react';
import { StyledCopyright } from './Copyright.style';

export default function Copyright() {
  return (
    <StyledCopyright>
      Copyright &copy; {new Date().getFullYear()}. Made by Adrian Pietrzak
    </StyledCopyright>
  );
}
