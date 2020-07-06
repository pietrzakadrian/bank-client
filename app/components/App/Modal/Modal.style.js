import styled from 'styled-components';
import { Modal } from 'antd';

export const StyledModal = styled(Modal)`
  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
  }
`;
