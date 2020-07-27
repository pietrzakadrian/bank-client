import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export const StyledSpin = styled(Spin)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
  height: 100%;
  width: 100%;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: 24px;
`;
