import React from 'react';
import { render } from '@testing-library/react';

import Mark from '../index';

describe('<Mark />', () => {
  it('should render a Mark', () => {
    const { container } = render(<Mark />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
