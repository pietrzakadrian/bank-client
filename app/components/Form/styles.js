import styled from 'styled-components';
import { colors } from 'utils';
import { Form, InputNumber, Button } from 'antd';

export const StyledFormActionsWrapper = styled.div`
  padding: 0 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  &&& {
    width: ${({ type }) => type !== 'link' && '100%'};
    color: ${({ back }) => back && 'inherit'};
    background-color: ${({ errored }) => errored && colors.red};
  }
`;

export const StyledError = styled.div`
  max-width: 300px;
  font-size: 11px;
  margin: 0 auto;
  color: ${colors.white};
  line-height: 1.5715;
`;

export const StyledFormWrapper = styled.div`
  text-align: center;
  background-color: ${colors.grey};
  box-shadow: ${({ shadowed }) =>
    shadowed &&
    `rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;`};
`;

export const StyledForm = styled(Form)`
  max-width: 300px;
  margin: ${({ centered }) => (centered ? '0 auto' : 0)};
  width: 100%;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 100%;

  .ant-input-number-handler-wrap {
    display: none;
  }
`;

export const StyledFormItem = styled(Form.Item)`
  padding: ${({ tailed }) => (tailed ? '0' : '20px 0 0')};
  text-align: left;

  .ant-form-item-label {
    padding-bottom: 0;

    label.ant-form-item-required {
      font-size: 14px;
    }

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
