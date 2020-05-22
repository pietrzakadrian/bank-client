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
`;

export const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  color: ${colors.white};
  font-size: 19px;
  display: none;

  ${media.tablet`
    display: contents;
  `}
`;

export const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: ${colors.white};
  font-size: 19px;
  display: none;

  ${media.tablet`
    display: contents;
  `}
`;

export const StyledBarsOutlined = styled(BarsOutlined)`
  color: ${colors.white};
  font-size: 19px;
  display: contents;

  ${media.tablet`
    display: none;
  `}
`;
