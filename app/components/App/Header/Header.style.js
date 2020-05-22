import styled from 'styled-components';
import { colors, media } from 'utils';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

export const headerHeight = '64px';

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  height: ${headerHeight};
  right: 0;
  top: 0;
  transition: all 0.1s ease-in-out;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  background: ${colors.white};

  ${media.tablet`
    width: ${({ open }) => (open ? '100%' : 'calc(100% - 250px)')};
  `}
`;

export const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  color: ${colors.black};
  font-size: 19px;
  display: none;
  align-items: center;

  ${media.tablet`
    display: flex;
  `}
`;

export const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${colors.black};
  font-size: 19px;
  display: none;
  align-items: center;

  ${media.tablet`
    display: flex;
  `}
`;

export const StyledBarsOutlined = styled(BarsOutlined)`
  color: ${colors.black};
  font-size: 19px;
  display: flex;
  align-items: center;

  ${media.tablet`
    display: none;
  `}
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
`;
