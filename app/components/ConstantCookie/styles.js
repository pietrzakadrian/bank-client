import styled from 'styled-components';
import { Card } from 'antd';
import { media } from 'utils';

export const StyledConstantCookie = styled(Card)`
  position: fixed;
  bottom: 0;

  ${media.tablet`
    max-width: 330px;
    right: 10px;
    bottom: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0em 0.0625em 0.1875em 0em, rgba(0, 0, 0, 0.14) 0em 0.0625em 0.0625em 0em, rgba(0, 0, 0, 0.12) 0em 0.125em 0.0625em -0.0625em;
`}
`;

export const StyledConstantCookieActions = styled.div`
  text-align: right;

  button {
    &:last-child {
      margin-left: 5px;
    }
  }
`;
