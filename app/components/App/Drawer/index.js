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
import { Drawer } from 'antd';

const stateSelector = createStructuredSelector({
  isCollapsedDrawer: makeSelectIsCollapsedDrawer(),
});

export default function StyledDrawer() {
  const { isCollapsedDrawer } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onCollapsedDrawer = () => dispatch(collapsedDrawerAction());

  return (
    <Drawer
      placement="left"
      closable={false}
      visible={isCollapsedDrawer}
      onClose={onCollapsedDrawer}
    >
      <div>siemka</div>
    </Drawer>
  );
}
