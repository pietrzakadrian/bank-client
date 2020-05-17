import styled from 'styled-components';
import { colors } from 'utils';
import { Form } from 'antd';

export const StyledFormWrapper = styled.div`
  text-align: center;
  background-color: ${colors.grey};
`;

export const StyledForm = styled(Form)`
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledFormItem = styled(Form.Item)`
  padding: ${(props) => (props.tail ? '0' : '20px 0 0')};
  text-align: left;

  .ant-form-item-label {
    padding-bottom: 0;

    .ant-form-item-required {
      font-size: 15.5px;

      &:before {
        content: none;
      }
    }
  }

  .ant-form-item-explain {
    font-size: 11px;
  }
`;
