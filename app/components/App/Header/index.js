/**
 *
 * Header
 *
 */

import React from 'react';

import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import {
  collapsedSidebarAction,
  collapsedDrawerAction,
} from 'containers/App/actions';
import {
  StyledMenuUnfoldOutlined,
  StyledMenuFoldOutlined,
  StyledBarsOutlined,
  StyledHeader,
} from './Header.style';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Header() {
  const { isCollapsedSidebar } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onCollapsedSidebar = () => dispatch(collapsedSidebarAction());
  const onCollapsedDrawer = () => dispatch(collapsedDrawerAction());

  return (
    <StyledHeader open={isCollapsedSidebar}>
      {isCollapsedSidebar ? (
        <StyledMenuUnfoldOutlined onClick={onCollapsedSidebar} />
      ) : (
        <StyledMenuFoldOutlined onClick={onCollapsedSidebar} />
      )}

      <StyledBarsOutlined onClick={onCollapsedDrawer} />
    </StyledHeader>
  );
}
