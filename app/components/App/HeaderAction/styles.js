import styled from 'styled-components';
import { media, colors } from 'utils';
import {
  PoweroffOutlined,
  MessageOutlined,
  BellOutlined,
  BellFilled,
  MessageFilled,
} from '@ant-design/icons';
import { headerHeight } from 'components/App/Header/styles';
import { Button } from 'antd';

export const StyledHeaderAction = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: ${headerHeight};
  align-items: center;

  ${media.tablet`
    width: auto;
    margin-right: 55px;
  `};
`;

export const StyledHeaderActionItem = styled(Button)`
  display: inline-flex;
  align-items: center;
  padding: 0;

  .anticon {
    display: flex;
  }
`;

export const StyledHeaderActionItemName = styled.div`
  display: none;
  color: ${colors.black};

  ${media.tablet`
    margin-left: 10px;
    display: inline-block;
  `}
`;

export const StyledPoweroffOutlined = styled(PoweroffOutlined)`
  font-size: 19px;
`;

export const StyledMessageOutlined = styled(MessageOutlined)`
  font-size: 19px;
`;

export const StyledMessageFilled = styled(MessageFilled)`
  font-size: 19px;
`;

export const StyledBellOutlined = styled(BellOutlined)`
  font-size: 19px;
`;

export const StyledBellFilled = styled(BellFilled)`
  font-size: 19px;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  justify-content: space-around;
  width: 90%;

  ${media.tablet`
    width: 100%;

    button {
      padding: 0 10px;

      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
  `}
`;
