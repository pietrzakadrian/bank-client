import styled from 'styled-components/macro';
import { Result } from 'antd';
import { media } from 'styles/media';

export const StyledResult = styled(Result)`
  padding: 48px 32px 0;
`;

export const StyledSubTitle = styled.div`
  padding: 24px 32px;
  line-height: 1.8;

  ${media.tablet`
    padding: 0 32px 24px;
  `}
`;

export const StyledAction = styled.div`
  padding: 0 0 28px;
`;
