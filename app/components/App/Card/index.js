import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentWidget,
  StyledCardContentTypography,
  StyledCardContentTypographyHeader,
  StyledCardContentTypographyMain,
} from './Card.style';

// eslint-disable-next-line react/prop-types
export default function Card({ isLoading, svg, pie }) {
  return (
    <StyledCard>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledCardContent>
          <StyledCardContentTypography>
            <StyledCardContentTypographyHeader>
              Available Funds
            </StyledCardContentTypographyHeader>
            <StyledCardContentTypographyMain>
              0.00 PLN
            </StyledCardContentTypographyMain>
          </StyledCardContentTypography>

          <StyledCardContentWidget pie={pie}>{svg}</StyledCardContentWidget>
        </StyledCardContent>
      )}
    </StyledCard>
  );
}
