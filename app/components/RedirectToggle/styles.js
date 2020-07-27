import styled from 'styled-components';
import { Button } from 'antd';
import { typography, colors } from 'utils';

export const StyledRedirectToggle = styled.div`
  margin: 20px auto 30px;
  text-align: left;
  font-weight: ${typography.fontWeightBold};

  padding: 0 15px;
  max-width: 560px;
`;

export const StyledButton = styled(Button)`
  font-weight: ${typography.fontWeightBold};
  color: ${colors.primaryBlue};
  padding: 0;
  height: auto;
`;
