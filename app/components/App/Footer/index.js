/**
 *
 * Footer
 *
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { StyledFooter } from './styles';

const stateSelector = createStructuredSelector({
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

export default function Footer() {
  const { isCollapsedSidebar } = useSelector(stateSelector);

  return (
    <StyledFooter collapsed={isCollapsedSidebar}>
      <strong>Bank Application 2.1</strong> | 19.12.2020
    </StyledFooter>
  );
}
