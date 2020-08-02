import styled from 'styled-components/macro';
import { media } from 'styles/media';

interface StyledNameProps {
  opened: boolean;
}

export const StyledName = styled.span<StyledNameProps>`
  display: none;
  margin: 0 15px;
  font-size: 19px;
  white-space: nowrap;

  ${media.tablet`
    display: ${({ opened }) => (opened ? 'inline-block' : 'none')};
  `}

  ${media.desktop`
    display: inline-block;
  `}
`;
