import styled from 'styled-components';
import { media } from 'utils';

export const StyledGridWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;

  .react-grid-placeholder {
    background-color: rgba(24, 144, 255, 0.1);
    z-index: 1;
  }

  ${media.tablet`
    max-width: 1100px;
  `}
`;

export const StyledGridItem = styled.div`
  transition: 0.2s;

  &.react-draggable-dragging {
    z-index: 2;
  }

  ${media.tablet`
    cursor: ${(props) => (props['data-grid'].static ? 'default' : 'move')};
  `}
`;
