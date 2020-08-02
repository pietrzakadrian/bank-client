/**
 *
 * Header
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import { StyledHeader, StyledBarsOutlined } from './styled';
import { actions } from 'app/containers/App/slice';
import { Mark } from 'app/components/App/Mark';
import { Action } from 'app/components/App/Header/Action';
import { Name } from 'app/components/App/Header/Name';
import {
  StyledHeaderWrapper,
  StyledMenuUnfoldOutlined,
  StyledMenuFoldOutlined,
} from './styled';

export function Header() {
  const { isCollapsedSidebar } = useSelector(selectApp);
  const dispatch = useDispatch();

  const onCollapsedSidebar = () => dispatch(actions.toggleSidebarAction());
  const onCollapsedDrawer = () => dispatch(actions.toggleDrawerAction());

  return (
    <StyledHeader opened={isCollapsedSidebar}>
      <StyledHeaderWrapper>
        {isCollapsedSidebar ? (
          <StyledMenuUnfoldOutlined onClick={onCollapsedSidebar} />
        ) : (
          <StyledMenuFoldOutlined onClick={onCollapsedSidebar} />
        )}

        <StyledBarsOutlined onClick={onCollapsedDrawer} />

        <Name />
      </StyledHeaderWrapper>

      <Action />
      <Mark />
    </StyledHeader>
  );
}
