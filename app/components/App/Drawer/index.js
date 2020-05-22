/**
 *
 * Drawer
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedDrawer } from 'containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { collapsedDrawerAction } from 'containers/App/actions';
import { StyledDrawer } from './Drawer.style';
import Footer from '../Footer';

const stateSelector = createStructuredSelector({
  isCollapsedDrawer: makeSelectIsCollapsedDrawer(),
});

export default function Drawer() {
  const { isCollapsedDrawer } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onCollapsedDrawer = () => dispatch(collapsedDrawerAction());

  return (
    <StyledDrawer
      placement="left"
      closable={false}
      visible={isCollapsedDrawer}
      onClose={onCollapsedDrawer}
    >
      <Footer />
    </StyledDrawer>
  );
}
