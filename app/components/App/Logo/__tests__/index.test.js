import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../index';

describe('<Logo />', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Logo />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
