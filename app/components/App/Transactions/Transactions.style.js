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
  .ant-empty {
    visibility: hidden;
  }
`;
