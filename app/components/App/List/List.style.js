import styled from 'styled-components';
import { List } from 'antd';
import { colors } from 'utils';

export const StyledList = styled(List)`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em,
    rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em,
    rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;

  .ant-list-header {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ant-list-items {
    max-height: 350px;
    overflow-y: auto;
  }
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
      cursor: pointer;
    }
  }
`;

export const StyledListItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledListItemSender = styled.span`
  color: ${colors.primaryBlue};
`;
