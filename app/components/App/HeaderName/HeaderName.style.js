import styled from 'styled-components';
import { media } from 'utils';

export const StyledHeaderName = styled.span`
  display: none;
  margin: 0 15px;
  font-size: 19px;

  ${media.tablet`
    position: absolute;
    top: 0;
    left: 50px;
    display: ${({ open }) => (open ? 'inline-block' : 'none')};
    // visibility: hidden;
  `}

  ${media.desktop`
    display: inline-block;
    position: relative;
    top: auto;
    left: auto;
  `}
`;
