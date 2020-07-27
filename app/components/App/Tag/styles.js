import styled from 'styled-components';
import { media } from 'utils';
import { Tag } from 'antd';

export const StyledTag = styled(Tag)`
  display: none;
  margin-left: 10px;

  ${media.tablet`
    display: inline-block;
   `}
`;
