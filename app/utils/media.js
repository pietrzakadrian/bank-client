import { css } from 'styled-components';

export const sizes = {
  desktop: 1024,
  tablet: 768,
  phone: 481,
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
