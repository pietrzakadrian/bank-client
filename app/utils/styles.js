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

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .ant-select {

  }

  input[type='text'],
  input[type='number'],
  input[type='password'],
  textarea,
  .ant-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size: 16px;

    &::placeholder, .ant-select-selection-placeholder { 
      font-size: 14px;
    }
  }

  .ant-dropdown {
    z-index: 999;
    width: 100%;
  }

  ${media.tablet`
    .ant-dropdown {
      max-width: 390px;
      width: 390px;
    }
  `}

  @media screen and (max-width: 480px) {
    .ant-notification {
      width: 100%;

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
