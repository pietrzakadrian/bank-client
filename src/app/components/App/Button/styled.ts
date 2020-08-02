import styled from 'styled-components/macro';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface StyledProps extends ButtonProps {
  hovered?: string;
}

export const StyledButton = styled(Button)<StyledProps>`
  padding: ${({ hovered }) => (hovered ? '0 10px' : 0)};
  display: flex;
  align-items: center;
  height: 100%;

  .anticon {
    font-size: 18.5px;
    margin-right: 5px;
  }

  &:hover {
    background: ${({ hovered }) => hovered && 'rgba(0, 0, 0, 0.08)'};
  }
`;

export const StyledButtonContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
