import styled from 'styled-components';
import { PageHeader } from 'antd';

export const StyledSubheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;

export const StyledPageHeader = styled(PageHeader)`
  padding-left: 0;
`;
