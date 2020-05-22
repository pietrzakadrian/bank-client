import styled from 'styled-components';
import { media } from 'utils';
import {
  PoweroffOutlined,
  MessageOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { headerHeight } from 'components/App/Header/Header.style';

export const StyledHeaderAction = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: ${headerHeight};

  ${media.tablet`
    display: inline-block;
    width: auto;
    margin-right: 25px;
  `};
`;

export const StyledHeaderActionItem = styled.div`
  display: inline-flex;
  align-items: center;

  ${media.tablet`
    margin: 0 10px;
  `}
`;

export const StyledHeaderActionItemName = styled.div`
  display: none;

  ${media.tablet`
    margin-left: 5px;
    display: inline-block;
  `}
`;

export const StyledPoweroffOutlined = styled(PoweroffOutlined)`
  font-size: 19px;
`;

export const StyledMessageOutlined = styled(MessageOutlined)`
  font-size: 19px;
`;

export const StyledBellOutlined = styled(BellOutlined)`
  font-size: 19px;
`;
