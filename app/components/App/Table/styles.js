import styled from 'styled-components';
import { Table } from 'antd';

export const StyledTableWrapper = styled.div`
  width: 100%;
  height: 100%;

  &:hover {
    cursor: auto;
  }
`;

export const StyledTable = styled(Table)`
  &&& {
    height: 100%;
    max-height: 218px;

    br {
      display: none;
    }

    .ant-spin-nested-loading {
      height: 100%;

      .ant-spin-container {
        height: 100%;
      }
    }

    .ant-table {
      height: 100%;

      .ant-table-container {
        height: 100%;

        .ant-table-content {
          height: 100%;

          table {
            display: block;
            height: 100%;
          }
        }
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

          div {
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

        &:last-child {
          width: 35%;
          padding-left: 2px;
          padding: ${({ minimaled }) => minimaled && '5px 24px 5px 0px'};
        }
      }
    }

    .ant-table-tbody {
      display: block;
      width: 100%;
      height: 100%;

      > tr {
        display: block;
        width: 100%;
        height: 100%;
        max-height: calc(100% / 4);

        > td {
          height: 100%;
          padding: ${(props) => (props.minimaled ? '5px 24px' : '16px 24px;')};
          white-space: nowrap;
          display: ${({ dataSource }) => !dataSource.length && 'none'};

          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
`;
