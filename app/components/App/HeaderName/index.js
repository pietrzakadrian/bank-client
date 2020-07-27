import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLocation,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { routes } from 'utils';
import { StyledHeaderName } from './styles';

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function HeaderName() {
  const {
    location: { pathname },
    isCollapsedSidebar,
  } = useSelector(stateSelector);

  return (
    <StyledHeaderName open={isCollapsedSidebar}>
      {Object.entries(routes).map(
        ({ 1: route }) =>
          route.path === pathname && <div key={route.path}>{route.name}</div>,
      )}
    </StyledHeaderName>
  );
}
