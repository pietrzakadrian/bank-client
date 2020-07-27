/* eslint-disable indent */
import styled from 'styled-components';
import { Card } from 'antd';

const cardHeaderHeight = 58;

export const StyledCard = styled(Card)`
         width: 100%;
         height: 100%;
         box-shadow: ${({ shadowed }) =>
           shadowed &&
           'rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em'};

         .ant-card-head {
           background-color: ${({ darker }) => darker && `rgb(247, 247, 247)`};
           height: ${cardHeaderHeight}px;

           .ant-card-extra {
              padding: 5px;
              border-radius: 5px;
              transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
              
              &:hover {
                 background: rgba(0, 0, 0, 0.08);
              }
           }
         }

         .ant-card-body {
           max-height: calc(100% - ${cardHeaderHeight}px);
           padding: 0;
           display: ${({ loaded, excluded }) => (loaded || excluded) && 'flex'};
           justify-content: ${({ loaded, excluded }) =>
             (loaded || excluded) && 'center'};
           align-items: ${({ loaded, excluded }) =>
             (loaded || excluded) && 'center'};
           text-align: ${({ loaded, excluded }) =>
             (loaded || excluded) && 'center'};
           opacity: ${({ excluded }) => excluded && '0.3'};
           text-align: left;
           height 100%;

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
