import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { StyledMenuItem } from './Navigation.style';

export default function Navigation() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <StyledMenuItem key="1" icon={<UserOutlined />}>
        nav 1
      </StyledMenuItem>
      <StyledMenuItem key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </StyledMenuItem>
      <StyledMenuItem key="3" icon={<UploadOutlined />}>
        nav 3
      </StyledMenuItem>
    </Menu>
  );
}
