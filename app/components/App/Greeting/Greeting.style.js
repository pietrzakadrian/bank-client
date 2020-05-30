import styled from 'styled-components';
import { colors, typography } from 'utils';

export const StyledGreeting = styled.section`
  text-align: right;
  margin: 0 0 20px;
  line-height: 1.3;
`;

export const StyledNameWrapper = styled.span`
  color: ${colors.primaryBlue};
  font-weight: ${typography.fontWeightBold};
`;

export const StyledLastSuccessfulLoggedDateWrapper = styled.span`
  color: ${colors.black};
`;

export const StyledLastFailedLoggedDate = styled.span`
  color: ${colors.red};
`;
