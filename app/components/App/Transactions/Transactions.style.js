/* eslint-disable consistent-return */
/* eslint-disable default-case */
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

function getColumnName(locale, child) {
  if (locale === 'en') {
    switch (child) {
      case 1:
        return 'Sender';
      case 2:
        return 'Recipient';
      case 3:
        return 'Amount money';
      case 4:
        return 'Transfer title';
      case 5:
        return 'Date';
    }
  } else if (locale === 'de') {
    switch (child) {
      case 1:
        return 'Absender';
      case 2:
        return 'Empfänger';
      case 3:
        return 'Geldbetrag';
      case 4:
        return 'Übertragungstitel';
      case 5:
        return 'Datum';
    }
  } else if (locale === 'pl') {
    switch (child) {
      case 1:
        return 'Nadawca';
      case 2:
        return 'Odbiorca';
      case 3:
        return 'Kwota pieniędzy';
      case 4:
        return 'Tytuł przelewu';
      case 5:
        return 'Data';
    }
  }
}

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
            content: ${({ locale }) => `'${getColumnName(locale, 1)}'`};
          }
        }

        &:nth-child(2) {
          &::before {
            content: ${({ locale }) => `'${getColumnName(locale, 2)}'`};
          }
        }

        &:nth-child(3) {
          &::before {
            content: ${({ locale }) => `'${getColumnName(locale, 3)}'`};
          }
        }

        &:nth-child(4) {
          &::before {
            content: ${({ locale }) => `'${getColumnName(locale, 4)}'`};
          }
        }

        &:nth-child(5) {
          &::before {
            content: ${({ locale }) => `'${getColumnName(locale, 5)}'`};
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
