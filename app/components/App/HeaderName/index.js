import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectLocation,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { routes } from 'utils';
import { StyledHeaderName } from './HeaderName.style';

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
        (route) =>
          route[1].path === pathname && (
            <div key={route[1].path}>{route[1].name}</div>
          ),
      )}
    </StyledHeaderName>
  );
}
