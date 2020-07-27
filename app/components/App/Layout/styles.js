import styled from 'styled-components';
import { media } from 'utils';
import { Layout } from 'antd';
import { headerHeight } from 'components/App/Header/styles';

export const StyledContent = styled(Layout.Content)`
  margin: ${headerHeight} auto 0;
  padding: 24px;
  width: 100%;
`;

export const StyledLayout = styled(Layout)`
  transition: all 0.1s ease-in-out;
  padding-left: 0;
  background-color: #fff;
  position: relative;

  ${media.tablet`
    padding-left: ${({ open }) => (open ? '80px' : '250px')};
  `}
`;
