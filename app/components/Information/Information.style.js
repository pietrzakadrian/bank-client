import styled from 'styled-components';
import { media, colors } from 'utils';

const StyledInformation = styled.div`
  max-width: 1260px;
  margin: 10px auto 0;
  color: ${colors.white};
  background-color: rgb(0, 152, 219);
  padding: 10px 15px;
  border-radius: 2px;

  ${media.tablet`
    margin: 10px auto;
    padding: 10px 130px;
  `}
`;

export default StyledInformation;
