import { createGlobalStyle } from 'styled-components';
import { media } from 'styles/media';

export const GlobalStyle = createGlobalStyle`
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

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
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
      max-width: 390px;
      width: 390px;
    }
  `}

  input, select {
    font-family: inherit;
    font-size: inherit;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield; 
  }

  @media screen and (max-width: 768px) {
    input[type='text'],
    input[type='number'],
    input[type='password'],
    textarea {
      appearance: none;
      font-size: 16px;

      &::placeholder { 
        font-size: 14px;
      }
    }

     .ant-select {
       font-size: 16px;
       
        .ant-select-selection-placeholder {
          font-size: 14px;
        }
     }
    
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
`;
