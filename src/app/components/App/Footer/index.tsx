/**
 *
 * Footer
 *
 */
import React from 'react';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledFooter } from './styled';

export function Footer() {
  const { isCollapsedSidebar } = useSelector(selectApp);

  return (
    <StyledFooter collapsed={isCollapsedSidebar}>
      <strong>Bank Application 2.0</strong> | 10.07.2020
    </StyledFooter>
  );
}
