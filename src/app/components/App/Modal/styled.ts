import styled from 'styled-components/macro';
import { Modal } from 'antd';
import { media } from 'styles/media';

export const StyledModal = styled(Modal)`
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 50%;

      div {
        white-space: pre-wrap;
      }
    }
  }

  ${media.tablet`
    .ant-modal-footer {

      button {
        width: auto;
      }
    } 
  `}
`;
