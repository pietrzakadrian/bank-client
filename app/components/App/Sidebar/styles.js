/**
 *
 * SidebarWrapper
 *
 */

import styled from 'styled-components';
import { Layout } from 'antd';
import { media } from 'utils';

export const StyledSidebar = styled(Layout.Sider)`
  &&& {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: 0;
    transition: all 0.1s ease-in-out;
    box-shadow: rgba(17, 17, 17, 0.06) 4px 0px 8px -3px;
    display: none;
    overflow-x: hidden;
    border-right: 1px solid rgba(0, 0, 0, 0.12);
    z-index: 3;

    .ant-menu {
      border-right: 0;
    }

    .ant-menu-inline-collapsed {
      .anticon {
        font-size: 16px;
        margin: 0;
      }
    }

    ${media.tablet`
    display: block;
  `};
  }
`;
