import styled from 'styled-components/macro';
import { Steps } from 'antd';
import { media } from 'styles/media';
import { StepsProps } from 'antd/lib/steps';

export const StyledSteps = styled(Steps)<StepsProps>`
  &&& {
    padding: 20px 20px 30px;

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
      padding: 20px 50px 30px;

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
