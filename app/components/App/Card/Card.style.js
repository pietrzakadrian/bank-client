import styled from 'styled-components';

export const StyledCard = styled.section`
  height: 95px;
  background-color: rgb(243, 243, 243);
  border: 1px solid rgba(0, 0, 0, 0.12);
  width: 33%;
  padding: 16px 24px;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 310px;
  justify-content: center;
`;

export const StyledCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 61px;
  width: 100%;
`;

export const StyledCardContentTypography = styled.div`
  width: 65%;
  height: 61px;
`;

export const StyledCardContentTypographyHeader = styled.div`
  font-size: 18px;
`;

export const StyledCardContentTypographyMain = styled.div`
  font-size: 22px;
`;

export const StyledCardContentWidget = styled.div`
  width: 35%;
  text-align: right;

  .recharts-wrapper {
    width: 100% !important;
    position: relative;
  }

  svg {
    width: 100%;
    height: 100%;

    &.recharts-surface {
      max-width: 74px;
      position: absolute;
      right: -6px;
    }
    max-width: ${({ pie }) => pie && '74px'};
  }
`;
