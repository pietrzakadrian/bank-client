import styled from 'styled-components';
import { media } from 'utils';

export const StyledHeaderName = styled.span`
  display: none;
  margin: 0 15px;
  font-size: 19px;

  ${media.tablet`
    display: inline-block;
  `}
`;
