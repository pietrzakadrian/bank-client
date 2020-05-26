import React from 'react';
import { render } from '@testing-library/react';
import Widget from '../index';

describe('<Widget />', () => {
  it('should render a Widget', () => {
    const { container } = render(<Widget />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
