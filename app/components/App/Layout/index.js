/**
 *
 * Layout
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledContent, StyledLayout } from './Layout.style';

import Drawer from '../Drawer';
import Copyright from '../Copyright';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Layout({ children }) {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  useEffect(() => {
    ReactGA.initialize('UA-64684999-1', { debug: true });
    ReactGA.set({ anonymizeIp: true }); // GDPR
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Drawer />
      <Sidebar />
      <StyledLayout open={isCollapsedSidebar}>
        <Header />
        <StyledContent>{children}</StyledContent>
        <Copyright />
      </StyledLayout>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
