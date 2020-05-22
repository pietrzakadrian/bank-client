import styled from 'styled-components';
import { media } from 'utils';

export const StyledMark = styled.img`
  color: black;

  ${media.tablet`
    position: absolute;
    right: 25px;
  `}
`;
