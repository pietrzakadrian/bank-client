import styled from 'styled-components';
import { media } from 'utils';

export const StyledHeaderName = styled.span`
  display: none;
  margin: 0 15px;
  font-size: 19px;
  white-space: nowrap;

  ${media.tablet`
    display: ${({ open }) => (open ? 'inline-block' : 'none')};
  `}

  ${media.desktop`
    display: inline-block;
  `}
`;
