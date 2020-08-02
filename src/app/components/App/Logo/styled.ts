import { headerHeight } from 'app/components/App/Header/styled';
import styled from 'styled-components/macro';

export const StyledLogo = styled.div`
  height: ${headerHeight};
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
