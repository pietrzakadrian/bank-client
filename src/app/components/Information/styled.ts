import styled from 'styled-components/macro';
import { media } from 'styles/media';

export const StyledInformation = styled.div`
  max-width: 1260px;
  margin: 10px auto;
  color: #fff;
  background-color: #1890ff;
  padding: 10px 15px;
  border-radius: 2px;

  ${media.tablet`
    padding: 10px 130px;
  `}
`;
