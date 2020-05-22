import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '../index';

describe('<Navigation />', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Navigation />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
