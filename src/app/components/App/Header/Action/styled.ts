import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { headerHeight } from 'app/components/App/Header/styled';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

export const StyledAction = styled.div`
  color: black;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: ${headerHeight};
  align-items: center;

  ${media.tablet`
    width: auto;
    margin-right: 55px;
  `};
`;

export const StyledActionItem = styled(Button)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  padding: 0;

  .ant-badge {
    font-size: 19px;

    .anticon {
      display: flex;
    }
  }
`;

export const StyledActionItemName = styled.div`
  display: none;
  color: #000;

  ${media.tablet`
    margin-left: 10px;
    display: inline-block;
  `}
`;

export const StyledActionWrapper = styled.div`
  display: flex;
  border-radius: 5px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  justify-content: space-around;
  width: 90%;

  ${media.tablet`
    width: 100%;

    button {
      padding: 0 10px;

      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
  `}
`;
