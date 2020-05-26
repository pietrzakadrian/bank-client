import React from 'react';
import { render } from '@testing-library/react';

import HeaderAction from '../index';

describe('<HeaderAction />', () => {
  it('should render a HeaderAction', () => {
    const { container } = render(<HeaderAction />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
