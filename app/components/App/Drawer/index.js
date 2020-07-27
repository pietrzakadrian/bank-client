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
import Footer from 'components/App/Footer';
import Navigation from 'components/App/Navigation';
import Logo from 'components/App/Logo';
import { StyledDrawer } from './styles';

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
      <Logo />
      <Navigation />
      <Footer />
    </StyledDrawer>
  );
}
