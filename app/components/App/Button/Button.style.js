import styled from 'styled-components';
import { Button } from 'antd';

export const StyledButton = styled(Button)`
  padding: 0;
  display: flex;
  align-items: center;
  height: 100%;

  .anticon {
    font-size: 18.5px;
    margin-right: 5px;
  }
`;

export const StyledButtonContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
