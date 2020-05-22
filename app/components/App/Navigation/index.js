import React from 'react';
import { Menu } from 'antd';
import { routes } from 'utils';

import {
  StyledMenuItem,
  StyledDesktopOutlined,
  StyledWalletOutlined,
  StyledHistoryOutlined,
  StyledSettingOutlined,
} from './Navigation.style';

const items = [
  {
    id: 1,
    name: 'Dashboard',
    path: routes.dashboard,
    icon: <StyledDesktopOutlined />,
  },
  {
    id: 2,
    name: 'Payment',
    path: routes.dashboard,
    icon: <StyledWalletOutlined />,
  },
  {
    id: 3,
    name: 'History',
    path: routes.dashboard,
    icon: <StyledHistoryOutlined />,
  },
  {
    id: 4,
    name: 'Settings',
    path: routes.dashboard,
    icon: <StyledSettingOutlined />,
  },
];

export default function Navigation() {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      {items.map((item) => (
        <StyledMenuItem key={item.id} icon={item.icon}>
          {item.name}
        </StyledMenuItem>
      ))}
    </Menu>
  );
}
