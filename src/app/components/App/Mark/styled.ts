import styled from 'styled-components/macro';
import { media } from 'styles/media';

export const StyledMark = styled.img`
  color: black;

  ${media.tablet`
    position: absolute;
    right: 25px;
  `}
`;
