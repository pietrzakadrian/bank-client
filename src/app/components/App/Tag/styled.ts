import styled from 'styled-components/macro';
import { media } from 'styles/media';
import { Tag } from 'antd';

export const StyledTag = styled(Tag)`
  display: none;
  margin-left: 10px;

  ${media.tablet`
    display: inline-block;
  `}
`;
