import styled from 'styled-components';
import { Steps, Spin } from 'antd';
import { media, colors } from 'utils';
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

export const StyledInformation = styled.div`
  font-size: 11px;
  color: ${colors.silver};
  padding: 5px 0 10px;
`;
