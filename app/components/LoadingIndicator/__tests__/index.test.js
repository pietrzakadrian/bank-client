import React from 'react';
import { render } from '@testing-library/react';
import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render a LoadingIndicator', () => {
    const { container } = render(<LoadingIndicator />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
