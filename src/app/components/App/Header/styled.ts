import styled from 'styled-components/macro';
import { media } from 'styles/media';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';

export const headerHeight = '64px';

interface StyledHeaderProps {
  opened: number;
}

export const StyledHeader = styled(Layout.Header)<StyledHeaderProps>`
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
  background: #fff;
  z-index: 3;

  ${media.tablet`
    width: ${({ opened }) => (opened ? '100%' : 'calc(100% - 250px)')};
  `}
`;

export const StyledMenuUnfoldOutlined = styled(MenuUnfoldOutlined)`
  color: #000;
  font-size: 19px;
  display: none;
  align-items: center;
  width: 48px;
  height: 48px;
  justify-content: center;
  border-radius: 25px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  ${media.tablet`
    display: flex;
  `}
`;

export const StyledMenuFoldOutlined = styled(MenuFoldOutlined)`
  color: #000;
  font-size: 19px;
  display: none;
  align-items: center;
  width: 48px;
  height: 48px;
  justify-content: center;
  border-radius: 25px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }

  ${media.tablet`
    display: flex;
  `}
`;

export const StyledBarsOutlined = styled(BarsOutlined)`
  color: #000;
  font-size: 19px;
  display: flex;
  align-items: center;

  ${media.tablet`
    display: none;
  `}
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;
