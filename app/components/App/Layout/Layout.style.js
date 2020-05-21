import styled from 'styled-components';
import { media } from 'utils';
import { Layout } from 'antd';

export const StyledContent = styled(Layout.Content)`
  margin: 0px auto;
  padding: 0 24px;
  width: 100%;

  ${media.tablet`
    margin: 20px auto;
    box-shadow: 0px 0px 30px 5px rgba(0, 0, 0, 0.05);
  `}
`;

export const StyledLayout = styled(Layout)`
  transition: all 0.1s ease-in-out;
  padding-left: 0;
  background-color: #fff;

  ${media.tablet`
    padding-left: ${({ open }) => (open ? '80px' : '250px')};
  `}
`;
