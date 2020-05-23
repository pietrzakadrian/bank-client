import React from 'react';
import { Menu } from 'antd';
import { routes } from 'utils';

import {
  StyledMenuItem,
  StyledDesktopOutlined,
  // StyledWalletOutlined,
  // StyledHistoryOutlined,
  // StyledSettingOutlined,
} from './Navigation.style';

const items = [
  {
    id: 1,
    name: routes.dashboard.name,
    path: routes.dashboard.path,
    icon: <StyledDesktopOutlined />,
  },
  // {
  //   id: 2,
  //   name: routes.dashboard.name,
  //   path: routes.dashboard.path,
  //   icon: <StyledWalletOutlined />,
  // },
  // {
  //   id: 3,
  //   name: routes.dashboard.name,
  //   path: routes.dashboard.path,
  //   icon: <StyledHistoryOutlined />,
  // },
  // {
  //   id: 4,
  //   name: routes.dashboard.name,
  //   path: routes.dashboard.path,
  //   icon: <StyledSettingOutlined />,
  // },
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
