/**
 *
 * Sidebar
 *
 */
import React from 'react';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledSidebar } from './styled';
import { Logo } from 'app/components/App/Logo';
import { Navigation } from 'app/components/App/Navigation';
import { Footer } from 'app/components/App/Footer';

export function Sidebar() {
  const { isCollapsedSidebar } = useSelector(selectApp);

  return (
    <StyledSidebar
      theme="light"
      trigger={null}
      collapsible
      collapsed={isCollapsedSidebar}
      width={250}
      collapsedWidth={80}
    >
      <Logo />
      <Navigation />
      <Footer />
    </StyledSidebar>
  );
}
