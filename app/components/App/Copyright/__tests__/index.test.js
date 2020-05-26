import React from 'react';
import { render } from '@testing-library/react';

import Copyright from '../index';

describe('<Copyright />', () => {
  it('should render a Copyright', () => {
    const { container } = render(<Copyright />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
