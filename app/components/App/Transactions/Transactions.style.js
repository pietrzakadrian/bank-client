/* eslint-disable indent */
import styled from 'styled-components';
import { colors } from 'utils';
import { Table } from 'antd';

export const StyledSenderAmountMoney = styled.div`
  display: contents;
  color: ${colors.red};
`;

export const StyledUser = styled.span`
  display: contents;
  color: ${colors.primaryBlue};
`;

export const StyledTypography = styled.div`
  display: inline;
`;

export const StyledTable = styled(Table)`
  @media only screen and (max-width: 768px) {
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
        font-size: 13px;
        border-bottom: 1px solid ${colors.primaryBlue};
        display: block;
        margin-bottom: 0.625em;
      }

      td {
        border-bottom: 1px solid ${colors.grey};
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
            content: ${({ columns }) =>
              `'${columns[0].title.props.defaultMessage}'`};
          }
        }

        &:nth-child(2) {
          &::before {
            content: ${({ columns }) =>
              `'${columns[1].title.props.defaultMessage}'`};
          }
        }

        &:nth-child(3) {
          &::before {
            content: ${({ columns }) =>
              `'${columns[2].title.props.defaultMessage}'`};
          }
        }

        &:nth-child(4) {
          &::before {
            content: ${({ columns }) =>
              `'${columns[3].title.props.defaultMessage}'`};
          }
        }

        &:nth-child(5) {
          &::before {
            content: ${({ columns }) =>
              `'${columns[4].title.props.defaultMessage}'`};
          }
        }

        &:last-child {
          border-bottom: 0;
        }
      }
    }
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
