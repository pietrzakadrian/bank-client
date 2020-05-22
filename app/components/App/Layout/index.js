/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledContent, StyledLayout } from './Layout.style';

import Drawer from '../Drawer';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Layout({ children }) {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  return (
    <>
      <Drawer />
      <Sidebar />
      <StyledLayout open={isCollapsedSidebar}>
        <Header />
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
