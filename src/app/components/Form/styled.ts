/**
 *
 * Form
 *
 */
import styled from 'styled-components';
import { Form, Button } from 'antd';

export const StyledFormActionsWrapper = styled.div`
  padding: 0 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

interface IStyledButton {
  type?: string;
  backed?: string;
  errored?: number;
}

export const StyledButton = styled(Button)<IStyledButton>`
  &&& {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: ${({ type }) => type !== 'link' && '100%'};
    color: ${({ backed }) => backed && 'inherit'};
    background-color: ${({ errored }) => errored && 'rgb(229, 0, 0)'};
  }
`;

export const StyledError = styled.div`
  max-width: 300px;
  font-size: 11px;
  margin: 0 auto;
  color: #fff;
  line-height: 1.5715;
`;

interface IStyledFormWrapper {
  shadowed?: string;
}

export const StyledFormWrapper = styled.div<IStyledFormWrapper>`
  text-align: center;
  background-color: rgb(242, 244, 247);
  box-shadow: ${({ shadowed }) =>
    shadowed &&
    `rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;`};
`;

interface IStyledForm {
  centered?: string;
}

export const StyledForm = styled(Form)<IStyledForm>`
  max-width: 300px;
  margin: ${({ centered }) => (centered ? '0 auto' : 0)};
  width: 100%;
`;

interface IStyledFormItem {
  tailed?: string;
}

export const StyledFormItem = styled(Form.Item)<IStyledFormItem>`
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
