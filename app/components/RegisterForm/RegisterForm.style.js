import styled from 'styled-components';
import { Steps, Form, Button, Spin } from 'antd';
import { media } from 'utils';
import { LoadingOutlined } from '@ant-design/icons';

export const StyledSteps = styled(Steps)`
  &&& {
    padding: 30px;
    max-width: 1260px;
    margin: 0 auto;
    flex-direction: row;

    .ant-steps-item {
      display: flex;
      align-items: center;
      justify-content: center;

      .ant-steps-item-icon {
        margin-right: 0;
      }

      .ant-steps-item-content {
        display: none;
      }
    }

    ${media.phone`
      .ant-steps-item {
        &:last-child {
          flex: 1;
        }
      }
    `}

    ${media.tablet`
      .ant-steps-item {
        display: inline-block;

        &:last-child {
          flex: none;
        }

        .ant-steps-item-icon {
          margin: 0 8px 0 0;
        }

        .ant-steps-item-content {
          display: inline-block;
        }
      }
    `}
  }
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: 24px;
`;

export const StyledSpin = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormWrapper = styled.div`
  text-align: center;
  background-color: rgb(242, 244, 247);
`;

export const StyledFormActionsWrapper = styled.div`
  padding: 0 0 20px;
  max-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: ${(props) => props.back && 'inherit'};
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

export const StyledInformation = styled.div`
  font-size: 11px;
  color: #bababa;
  padding: 5px 0 10px;
`;
