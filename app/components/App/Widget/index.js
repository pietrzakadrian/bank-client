import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledWidget,
  StyledWidgetContent,
  StyledWidgetContentWidget,
  StyledWidgetContentTypography,
  StyledWidgetContentTypographyHeader,
  StyledWidgetContentTypographyMain,
  StyledWidgetContentTypographyMainUnit,
  StyledWidgetContentDescription,
} from './styles';

export default function Widget({
  isLoading,
  svg,
  svgFormat,
  title,
  content,
  unit,
  description,
}) {
  return (
    <StyledWidget>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledWidgetContent centered={!!description}>
          {title && content && unit && (
            <StyledWidgetContentTypography>
              <StyledWidgetContentTypographyHeader>
                {title}
              </StyledWidgetContentTypographyHeader>

              <StyledWidgetContentTypographyMain>
                {content}
                <StyledWidgetContentTypographyMainUnit>
                  {unit}
                </StyledWidgetContentTypographyMainUnit>
              </StyledWidgetContentTypographyMain>
            </StyledWidgetContentTypography>
          )}

          {description && (
            <StyledWidgetContentDescription>
              {description}
            </StyledWidgetContentDescription>
          )}

          {svg && (
            <StyledWidgetContentWidget svgFormat={svgFormat}>
              {svg}
            </StyledWidgetContentWidget>
          )}
        </StyledWidgetContent>
      )}
    </StyledWidget>
  );
}

Widget.propTypes = {
  isLoading: PropTypes.bool,
  svg: PropTypes.object,
  svgFormat: PropTypes.bool,
  title: PropTypes.string,
  content: PropTypes.string,
  unit: PropTypes.string,
  description: PropTypes.string,
};
