import styled from 'styled-components';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  WalletOutlined,
  HistoryOutlined,
  SettingOutlined,
} from '@ant-design/icons';

export const StyledMenuItem = styled(Menu.Item)`
  &&& {
    margin: 0;
    display: flex;
    align-items: center;
    height: 45px;
  }
`;

export const StyledDesktopOutlined = styled(DesktopOutlined)`
  &&& {
    font-size: 19px;
  }
`;

export const StyledWalletOutlined = styled(WalletOutlined)`
  &&& {
    font-size: 19px;
  }
`;

export const StyledHistoryOutlined = styled(HistoryOutlined)`
  &&& {
    font-size: 19px;
  }
`;

export const StyledSettingOutlined = styled(SettingOutlined)`
  &&& {
    font-size: 19px;
  }
`;
