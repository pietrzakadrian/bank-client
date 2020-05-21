/**
 *
 * Footer
 *
 */

import React from 'react';
// import { useSelector } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { makeSelectIsCollapsed } from 'containers/App/selectors';
// import FooterWrapper from './FooterWrapper';

// const stateSelector = createStructuredSelector({
//   isCollapsed: makeSelectIsCollapsed(),
// });

export default function Footer() {
  //   const { isCollapsed } = useSelector(stateSelector);

  return (
    <footer>
      Copyright &copy; {new Date().getFullYear()} | pietrzakadrian
    </footer>
  );
}
