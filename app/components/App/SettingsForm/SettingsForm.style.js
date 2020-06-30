import styled from 'styled-components';
import { media } from 'utils';

export const SettingsFormWrapper = styled.div`
  form {
    margin: 0 auto;
    padding: 0 10px;

    &:last-child {
      padding-bottom: 15px;
    }
  }

  ${media.tablet`
    display: flex;
    justify-content: center;

    form {
      margin: 0;

      &:first-child {
        padding: 0 5px 0 10px;
      }

      &:last-child {
        padding-bottom: 0;
        padding: 0 10px 0 5px;
      }
    }
  `}

  ${media.desktop`
    form {
      margin: 0 10px;
    }
  `}
`;
