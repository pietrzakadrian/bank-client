import styled from 'styled-components';
import { colors, typography } from 'utils';

export const StyledGreeting = styled.section`
  text-align: right;
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
