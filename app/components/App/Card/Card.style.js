/* eslint-disable indent */
import styled from 'styled-components';
import { Card } from 'antd';

export const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  box-shadow: ${({ shadowed }) =>
    shadowed &&
    'rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em'};

  .ant-card-head {
    background-color: ${({ darker }) => darker && `rgb(247, 247, 247)`};
  }

  .ant-card-body {
    max-height: calc(100% - 58px);
    padding: 0;
    display: ${({ loaded, excluded }) => (loaded || excluded) && 'flex'};
    justify-content: ${({ loaded, excluded }) =>
      (loaded || excluded) && 'center'};
    align-items: ${({ loaded, excluded }) => (loaded || excluded) && 'center'};
    text-align: ${({ loaded, excluded }) => (loaded || excluded) && 'center'};
    height 100%;
    overflow-y: scroll;

    &:hover {
      cursor: auto;
    }
  }
`;

export const StyledCardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
