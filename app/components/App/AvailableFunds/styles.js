import styled from 'styled-components';

export const StyledAvailableFunds = styled.section``;

export const StyledCard = styled.div`
  height: 95px;
  border: 1px solid black;
  width: 33%;
  padding: 16px 24px;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 310px;
  justify-content: center;

  .header {
  }

  .content {
    display: flex;
    justify-content: space-between;

    .left {
      width: 65%;
    }

    .info {
    }

    .trend {
      width: 35%;

      svg {
        height: 100%;
      }
    }
  }
`;
