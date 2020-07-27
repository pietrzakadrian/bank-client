import styled from 'styled-components';
import { List } from 'antd';
import { colors, typography, media } from 'utils';

export const StyledList = styled(List)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em,
    rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em,
    rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .ant-spin-nested-loading {
    width: 100%;
  }

  .ant-list-header {
    width: 100%;
    padding: 5px 15px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      font-size: 13px;
    }
  }

  .ant-list-items {
    max-height: 350px;
    overflow-y: auto;
  }

  ${media.tablet`
    min-height: 153px;
  `}
`;

export const StyledListItem = styled(List.Item)`
  &&& {
    padding: 10px 15px;
    background-color: ${({ readed }) => (!readed ? '#e6f7ff' : 'white')};

    br {
      display: none;
    }

    strong {
      font-weight: normal;
    }

    &:hover {
      cursor: ${({ hovered }) => !hovered && 'pointer'};
      background-color: ${({ hovered }) => !hovered && '#f6f6f669'};
    }
  }
`;

export const StyledListItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
`;

export const StyledListItemSenderWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 50%;
`;

export const StyledListItemSender = styled.span`
  color: ${colors.primaryBlue};
  display: contents;
`;

export const StyledListItemAmount = styled.span`
  font-weight: ${typography.fontWeightBold};
`;

export const StyledListItemDate = styled.span`
  display: block;
  font-size: 12px;
  text-align: right;
`;

export const StyledListItemNoData = styled.div`
  margin: auto;
  pointer-events: none;
  color: ${colors.silver};
  font-size: 13px;
`;
