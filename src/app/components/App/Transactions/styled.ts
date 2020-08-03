import styled from 'styled-components/macro';
import { Table } from 'antd';

export const StyledSenderAmountMoney = styled.div`
  display: contents;
  color: rgb(229, 0, 0);
`;

export const StyledUser = styled.span`
  display: contents;
  color: #1890ff;
`;

export const StyledTypography = styled.div`
  display: inline;
`;

export const StyledTable = styled(Table)<any>`
  @media only screen and (max-width: 1024px) {
    table {
      border: 0;

      thead {
        border: none;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      tr {
        font-size: 12px;
        border-bottom: 1px solid #1890ff;
        display: block;
        margin-bottom: 0.625em;
      }

      td {
        border-bottom: 1px solid rgb(242, 244, 247);
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: right;

        &::before {
          float: left;
          font-weight: bold;
        }

        &:nth-child(1) {
          &::before {
            content: ${({ sender }) => `'${sender}'`};
          }
        }

        &:nth-child(2) {
          &::before {
            content: ${({ recipient }) => `'${recipient}'`};
          }
        }

        &:nth-child(3) {
          &::before {
            content: ${({ amountMoney }) => `'${amountMoney}'`};
          }
        }

        &:nth-child(4) {
          &::before {
            content: ${({ transferTitle }) => `'${transferTitle}'`};
          }
        }

        &:nth-child(5) {
          &::before {
            content: ${({ date }) => `'${date}'`};
          }
        }

        &:nth-child(6) {
          &::before {
            content: ${({ confirmation }) => `'${confirmation}'`};
          }
        }

        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }

  .ant-tag {
    margin-right: 0;
  }

  .ant-empty {
    visibility: hidden;
  }

  .ant-spin-nested-loading {
    > div {
      > .ant-spin {
        max-height: initial;
      }
    }
  }
`;
