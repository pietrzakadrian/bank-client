import { createGlobalStyle } from 'styled-components';

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

    // .ant-modal {
    //   top: 50%;
    //   transform: translateY(-50%);
    // }
  }
`;

export default GlobalStyle;
