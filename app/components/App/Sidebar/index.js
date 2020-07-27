/**
 *
 * Sidebar
 *
 */

import React from 'react';

import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import Navigation from 'components/App/Navigation';
import Footer from 'components/App/Footer';
import Logo from 'components/App/Logo';
import { StyledSidebar } from './styles';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Sidebar() {
  const { isCollapsedSidebar } = useSelector(stateSelector);

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
