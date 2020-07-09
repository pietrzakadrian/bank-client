import { createGlobalStyle } from 'styled-components';
import { media } from 'utils';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    overscroll-behavior-y: none;

    &.react-draggable-transparent-selection {
      .react-draggable {
        &:not(:active) {
          opacity: 0.3;
        }
      }
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  svg {
    vertical-align: baseline;
  }

  .ant-dropdown {
    z-index: 999;
    width: 100%;
  }

  ${media.tablet`
    .ant-dropdown {
      max-width: 340px;
      width: 340px;
    }
  `}

  @media screen and (max-width: 480px) {
    .ant-notification {
      &.ant-notification-bottomLeft {
        left: 50% !important;
        transform: translateX(-50%) !important;
        margin-left: 0 !important;

        .ant-notification-notice {
          margin-left: 0 !important;
          width: 100% !important;
        }
      }
    }
  }
`;

export default GlobalStyle;
