import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTable = styled(Table)`
  &&& {
    .ant-table {
      table {
        display: block;
      }
    }

    .ant-table-content {
      overflow-x: hidden;
    }

    .ant-table-row {
      .ant-table-cell {
        display: inline-block;
        overflow: hidden;

        &:first-child {
          width: 65%;
          padding: ${({ minimaled }) => minimaled && '5px 0 5px 24px'};
          padding-right: 2px;
        }

        &:last-child {
          width: 35%;
          padding-left: 2px;
          padding: ${({ minimaled }) => minimaled && '5px 24px 5px 0px'};
        }

        div {
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      &:last-child {
        .ant-table-cell {
          border-bottom: 0;
        }
      }
    }

    .ant-table-tbody {
      display: block;
      width: 100%;

      > tr {
        display: block;
        width: 100%;

        > td {
          padding: 16px 24px;
          padding: ${({ minimaled }) => minimaled && '5px 24px'};

          white-space: nowrap;

          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
`;
