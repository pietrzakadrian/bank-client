import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledCard,
  StyledCardContent,
  StyledCardContentWidget,
  StyledCardContentTypography,
  StyledCardContentTypographyHeader,
  StyledCardContentTypographyMain,
  StyledCardContentTypographyMainUnit,
  StyledCardContentDescription,
} from './Card.style';

export default function Card({
  isLoading,
  svg,
  svgFormat,
  title,
  content,
  unit,
  description,
}) {
  return (
    <StyledCard>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledCardContent noCenter={!!description}>
          {title && content && unit && (
            <StyledCardContentTypography>
              <StyledCardContentTypographyHeader>
                {title}
              </StyledCardContentTypographyHeader>

              <StyledCardContentTypographyMain>
                {content}
                <StyledCardContentTypographyMainUnit>
                  {unit}
                </StyledCardContentTypographyMainUnit>
              </StyledCardContentTypographyMain>
            </StyledCardContentTypography>
          )}

          {description && (
            <StyledCardContentDescription>
              {description}
            </StyledCardContentDescription>
          )}

          {svg && (
            <StyledCardContentWidget svgFormat={svgFormat}>
              {svg}
            </StyledCardContentWidget>
          )}
        </StyledCardContent>
      )}
    </StyledCard>
  );
}

Card.propTypes = {
  isLoading: PropTypes.bool,
  svg: PropTypes.object,
  svgFormat: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.string,
};
