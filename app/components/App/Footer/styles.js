import styled from 'styled-components';
import { media } from 'utils';

export const StyledFooter = styled.footer`
  display: inline-block;
  color: black;
  text-align: center;
  position: absolute;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 12px;
  white-space: nowrap;
  transition: 0.4s;

  ${media.tablet`
    opacity: ${({ collapsed }) => (collapsed ? 0 : 1)}};
    visibility: ${({ collapsed }) => (collapsed ? 'hidden' : 'visible')}};
  `};
`;
