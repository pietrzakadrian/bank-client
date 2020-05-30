import React from 'react';
import { Menu } from 'antd';
import { routes } from 'utils';

import {
  DesktopOutlined,
  WalletOutlined,
  HistoryOutlined,
  SettingOutlined,
  CreditCardOutlined,
  LineChartOutlined,
  BankOutlined,
} from '@ant-design/icons';

import { StyledMenuItem } from './Navigation.style';

const items = [
  {
    id: 1,
    name: routes.dashboard.name,
    path: routes.dashboard.path,
    icon: <DesktopOutlined />,
    disabled: false,
  },
  {
    id: 2,
    name: 'Payment',
    path: routes.dashboard.path,
    icon: <WalletOutlined />,
    disabled: true,
  },
  {
    id: 3,
    name: 'History',
    path: routes.dashboard.path,
    icon: <HistoryOutlined />,
    disabled: true,
  },
  {
    id: 4,
    name: 'Cards',
    path: routes.dashboard.path,
    icon: <CreditCardOutlined />,
    disabled: true,
  },
  {
    id: 5,
    name: 'Credits',
    path: routes.dashboard.path,
    icon: <LineChartOutlined />,
    disabled: true,
  },
  {
    id: 6,
    name: 'Deposits',
    path: routes.dashboard.path,
    icon: <BankOutlined />,
    disabled: true,
  },
  {
    id: 7,
    name: 'Settings',
    path: routes.dashboard.path,
    icon: <SettingOutlined />,
    disabled: true,
  },
];

export default function Navigation() {
  return (
    <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
      {items.map((item) => (
        <StyledMenuItem key={item.id} icon={item.icon} disabled={item.disabled}>
          {item.name}
        </StyledMenuItem>
      ))}
    </Menu>
  );
}
