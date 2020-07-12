import styled from 'styled-components';
import { Button } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { typography, colors } from 'utils';

export const StyledFooter = styled.footer`
  margin: 15px auto;
  max-width: 560px;
  font-size: 13px;
  padding: 0 20px 10px;
`;

export const StyledWarning = styled.div`
  display: flex;
  align-items: center;
  font-weight: ${typography.fontWeightMedium};
  margin: 20px 0;
  font-size: 14px;
`;

export const StyledInfoCircleOutlined = styled(InfoCircleOutlined)`
  font-size: 40px;
  margin-right: 13px;
`;

export const StyledTip = styled.div`
  color: ${colors.red};
  margin: 15px 0;
`;

export const StyledButton = styled(Button)`
  font-weight: ${typography.fontWeightMedium};
  padding: 0;
  color: inherit;
  height: auto;
  font-size: inherit;
`;
