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
import { makeSelectLocation } from 'containers/App/selectors';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledMenuItem } from './styles';

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
    name: routes.payment.name,
    path: routes.payment.path,
    icon: <WalletOutlined />,
    disabled: false,
  },
  {
    id: 3,
    name: routes.history.name,
    path: routes.history.path,
    icon: <HistoryOutlined />,
    disabled: false,
  },
  {
    id: 4,
    name: 'Cards',
    path: '4',
    icon: <CreditCardOutlined />,
    disabled: true,
  },
  {
    id: 5,
    name: 'Credits',
    path: '5',
    icon: <LineChartOutlined />,
    disabled: true,
  },
  {
    id: 6,
    name: 'Deposits',
    path: '6',
    icon: <BankOutlined />,
    disabled: true,
  },
  {
    id: 7,
    name: routes.settings.name,
    path: routes.settings.path,
    icon: <SettingOutlined />,
    disabled: false,
  },
];

const stateSelector = createStructuredSelector({
  location: makeSelectLocation(),
});

export default function Navigation() {
  const {
    location: { pathname },
  } = useSelector(stateSelector);

  return (
    <Menu theme="light" mode="inline" selectedKeys={[pathname]}>
      {items.map((item) => (
        <StyledMenuItem
          key={item.path}
          icon={item.icon}
          disabled={item.disabled}
        >
          <NavLink to={item.path}>{item.name}</NavLink>
        </StyledMenuItem>
      ))}
    </Menu>
  );
}
