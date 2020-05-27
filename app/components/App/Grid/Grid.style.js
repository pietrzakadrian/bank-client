import styled from 'styled-components';
import { media } from 'utils';

export const StyledGridWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;

  ${media.tablet`
    max-width: 1100px;
    width: calc(100% - 70px);
  `}
`;

export const StyledGridItem = styled.div`
  border: 1px solid red;

  &.react-draggable-dragging {
    z-index: 1;
  }

  ${media.tablet`
    cursor: ${(props) => (props['data-grid'].static ? 'default' : 'move')};
  `}
`;
