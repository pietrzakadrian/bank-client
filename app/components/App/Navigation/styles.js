import styled from 'styled-components';
import { Menu } from 'antd';

export const StyledMenuItem = styled(Menu.Item)`
  &&& {
    margin: 0;
    display: flex;
    align-items: center;
    height: 45px;

    .anticon {
      font-size: 19px;
      margin: 0 20px 0 10px;
    }

    a {
      &.active {
        pointer-events: none;
        user-select: none;
      }
    }
  }
`;
