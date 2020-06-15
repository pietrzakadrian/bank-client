import styled from 'styled-components';
import { typography } from 'utils';

export const StyledConfirmWrapper = styled.section`
  margin: 0 auto 10px;
  text-align: center;
  padding: 20px 0 0;

  .ant-card {
    margin: 0 auto;
    max-width: 350px;

    .ant-card-body {
      padding: 16px 24px;
    }
  }
`;

export const StyledLabel = styled.span`
  font-weight: ${typography.fontWeightBold};
`;
