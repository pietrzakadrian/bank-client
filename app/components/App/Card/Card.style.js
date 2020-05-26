import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  box-shadow: ${({ isShadow }) =>
    isShadow &&
    'rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em'};

  .ant-card-head {
    background-color: ${(props) => props.isBackground && `rgb(247, 247, 247)`};
  }

  .ant-card-body {
    padding: 0;
    display: ${({ isLoading }) => isLoading && 'flex'};
    justify-content: ${({ isLoading }) => isLoading && 'center'};
    min-height: 220px;
    height 100%;
    max-height: 220px;
    overflow-y: scroll;

    .ant-table-tbody > tr > td {
      padding: 16px 24px;

      &:last-child {
        text-align: right;
      }
    }
  }
`;
