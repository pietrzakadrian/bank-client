import styled from 'styled-components';
import { Button } from 'antd';

export const StyledFormActionsWrapper = styled.div`
  padding: 0 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: ${(props) => props.back && 'inherit'};
`;
