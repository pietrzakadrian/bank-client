import styled from 'styled-components';
import { media } from 'utils';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  ${media.tablet`
    padding: 0 50px;
  `};
`;

export const StyledImg = styled.img`
  display: block;
`;
