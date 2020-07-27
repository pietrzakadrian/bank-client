import styled from 'styled-components';
import { media, colors } from 'utils';

const StyledInformation = styled.div`
  max-width: 1260px;
  margin: 10px auto;
  color: ${colors.white};
  background-color: ${colors.primaryBlue};
  padding: 10px 15px;
  border-radius: 2px;

  ${media.tablet`
    padding: 10px 130px;
  `}
`;

export default StyledInformation;
