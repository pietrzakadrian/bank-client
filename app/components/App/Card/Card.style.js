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
    max-height: calc(100% - 56px);
    padding: 0;
    display: ${({ loaded, disabled }) => (loaded || disabled) && 'flex'};
    justify-content: ${({ loaded, disabled }) =>
      (loaded || disabled) && 'center'};
    align-items: ${({ loaded, disabled }) => (loaded || disabled) && 'center'};
    text-align: ${({ loaded, disabled }) => (loaded || disabled) && 'center'};
    height 100%;
    // max-height: 199px;
    // min-height: 199px;
    overflow-y: scroll;
  }
`;
