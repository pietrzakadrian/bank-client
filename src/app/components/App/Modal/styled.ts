import styled from 'styled-components/macro';
import { Modal } from 'antd';
import { media } from 'styles/media';
import { ModalProps } from 'antd/lib/modal';

export const StyledModal = styled(Modal)<ModalProps>`
  padding-bottom: 0;

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
