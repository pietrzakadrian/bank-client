import React from 'react';
import { render } from '@testing-library/react';

import { LoginForm } from '..';

describe('<LoginForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoginForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
