import React from 'react';
import { render } from '@testing-library/react';

import { RegisterForm } from '..';

describe('<RegisterForm  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<RegisterForm />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
