import styled from 'styled-components';
import { media } from 'utils';

export const SettingsFormWrapper = styled.div`
  min-height: 497px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;

  form {
    margin: 0 auto;
    padding: 0 10px;

    &:last-child {
      padding-bottom: 15px;
    }
  }

  ${media.tablet`
    min-height: 306px;
    flex-direction: row;
    align-items: ${({ loaded }) => (loaded ? 'center' : 'end')};


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
