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
import {
  makeSelectIsCollapsedSidebar,
  makeSelectIsLogged,
  makeSelectLocation,
} from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledContent, StyledLayout } from './styles';

import Drawer from '../Drawer';
import Copyright from '../Copyright';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
  isLogged: makeSelectIsLogged(),
  location: makeSelectLocation(),
});

export default function Layout({ children }) {
  const {
    isCollapsedSidebar,
    isLogged,
    location: { pathname },
  } = useSelector(stateSelector);

  useEffect(() => {
    if (isLogged) {
      ReactGA.initialize('UA-64684999-1');
      ReactGA.set({ anonymizeIp: true, page: pathname });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

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
