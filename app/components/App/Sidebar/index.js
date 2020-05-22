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
import { StyledSidebar } from './Sidebar.style';
import Logo from '../Logo';

// import Navigation from 'components/App/Navigation';
// import Footer from 'components/App/Footer';
// import SidebarWrapper from './SidebarWrapper';
// import LogoWrapper from './LogoWrapper';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Sidebar() {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  return (
    <StyledSidebar
      trigger={null}
      collapsible
      collapsed={isCollapsedSidebar}
      width={250}
    >
      <Logo />
      <Navigation />
      <Footer />
    </StyledSidebar>
  );
}
