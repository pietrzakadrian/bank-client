/**
 *
 * Drawer
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import { actions } from 'app/containers/App/slice';
import { StyledDrawer } from './styled';
import { Logo } from 'app/components/App/Logo';
import { Navigation } from 'app/components/App/Navigation';
import { Footer } from 'app/components/App/Footer';

export function Drawer() {
  const { isCollapsedDrawer } = useSelector(selectApp);
  const dispatch = useDispatch();

  const onCollapsedDrawer = () => dispatch(actions.toggleDrawerAction());

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
