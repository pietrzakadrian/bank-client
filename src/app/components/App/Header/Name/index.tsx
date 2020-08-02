/**
 *
 * Name
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectApp, selectLocation } from 'app/containers/App/selectors';
import { StyledName } from './styled';
import routes from 'utils/routes';

export function Name() {
  const { isCollapsedSidebar } = useSelector(selectApp);
  const { pathname } = useSelector(selectLocation);

  return (
    <StyledName opened={isCollapsedSidebar}>
      {Object.entries(routes).map(
        ({ 1: route }) =>
          route.path === pathname && <div key={route.path}>{route.name}</div>,
      )}
    </StyledName>
  );
}
