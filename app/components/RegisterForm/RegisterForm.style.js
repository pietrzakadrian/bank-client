import styled from 'styled-components';
import { Steps, Form, Button } from 'antd';

export const StyledSteps = styled(Steps)`
  padding: 30px;
  max-width: 1260px;
  margin: 0 auto;
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
  padding: ${(props) => (props.checkbox && '0') || '20px 0 0'};
  margin-bottom: ${(props) => props.checkbox && '0'};
  text-align: left;
`;

export const StyledInformation = styled.div`
  font-size: 11px;
  color: #bababa;
  padding: 5px 0 10px;
`;
