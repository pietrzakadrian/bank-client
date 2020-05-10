import styled from 'styled-components';
import { Button } from 'antd';

export const StyledFooter = styled.footer`
  margin: 15px auto;
  max-width: 560px;
  font-size: 13px;
  padding: 0 20px;
`;

export const StyledWarning = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin: 20px 0;
  font-size: 14px;
`;

export const StyledList = styled.div``;

export const StyledTip = styled.div`
  color: rgb(229, 0, 0);
  margin: 15px 0;
`;

export const StyledButton = styled(Button)`
  font-weight: 500;
  padding: 0;
  color: inherit;
  height: auto;
  font-size: inherit;
`;
