import styled from 'styled-components';
import { List } from 'antd';
import { colors } from 'utils';

export const StyledList = styled(List)`
  .ant-list-header {
    padding: 10px 15px;
  }
`;

export const StyledListItem = styled(List.Item)`
  &&& {
    padding: 10px 15px;
    background-color: ${({ readed }) => (readed ? colors.grey : 'white')};

    br {
      display: none;
    }

    strong {
      font-weight: normal;
    }

    &:hover {
      cursor: pointer;
      background-color: grey;
    }
  }
`;
