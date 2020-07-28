import { media, sizes } from '../media';
import { css } from 'styled-components/macro';

describe('media', () => {
  it('should return media query in css', () => {
    const mediaQuery = media.tablet`color:red;`.join('');
    const cssVersion = css`
      @media (min-width: ${sizes.tablet}px) {
        color: red;
      }
    `.join('');
    expect(mediaQuery).toEqual(cssVersion);
  });
});
