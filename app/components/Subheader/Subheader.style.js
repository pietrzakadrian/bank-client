import styled from 'styled-components';
import { PageHeader } from 'antd';
import { media } from 'utils';

export const StyledSubheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  .ant-select {
    width: 70px;
  }

  ${media.tablet`
    padding: 0 50px;
  `};
`;

export const StyledPageHeader = styled(PageHeader)`
  padding-left: 0;
`;
