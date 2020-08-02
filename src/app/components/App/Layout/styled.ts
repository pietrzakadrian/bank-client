import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Layout } from 'antd';
import { headerHeight } from 'app/components/App/Header/styled';

export const StyledContent = styled(Layout.Content)`
  margin: ${headerHeight} auto 0;
  padding: 24px;
  width: 100%;
`;

interface StyledLayoutProps {
  opened: boolean;
}

export const StyledLayout = styled(Layout)<StyledLayoutProps>`
  transition: all 0.1s ease-in-out;
  padding-left: 0;
  background-color: #fff;
  position: relative;

  ${media.tablet`
    padding-left: ${({ opened }) => (opened ? '80px' : '250px')};
  `}
`;
