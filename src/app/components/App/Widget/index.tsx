/**
 *
 * Widget
 *
 */
import React from 'react';
import {
  StyledWidget,
  StyledWidgetContent,
  StyledWidgetContentWidget,
  StyledWidgetContentTypography,
  StyledWidgetContentTypographyHeader,
  StyledWidgetContentTypographyMain,
  StyledWidgetContentTypographyMainUnit,
  StyledWidgetContentDescription,
} from './styled';
import LoadingIndicator from 'app/components/LoadingIndicator';

interface Props {
  isLoading?: boolean;
  svg?: any;
  title?: string;
  content?: any;
  unit?: string;
  description?: string;
  pie?: string;
}

export function Widget({
  isLoading,
  svg,
  title,
  content,
  unit,
  description,
  pie,
}: Props) {
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

          {svg && <StyledWidgetContentWidget>{svg}</StyledWidgetContentWidget>}
        </StyledWidgetContent>
      )}
    </StyledWidget>
  );
}
