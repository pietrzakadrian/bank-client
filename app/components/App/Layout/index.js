/**
 *
 * Layout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Layout } from 'antd';
import Sidebar from 'components/App/Sidebar';
import Header from 'components/App/Header';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledContent } from './Layout.style';

import Drawer from '../Drawer';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function StyledLayout({ children }) {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  return (
    <Layout>
      <Drawer />
      <Sidebar />
      <StyledLayout open={isCollapsedSidebar}>
        <Header />
        <StyledContent>{children}</StyledContent>
      </StyledLayout>
    </Layout>
  );
}

StyledLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
