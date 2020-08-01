import React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { PrivacyPage } from '..';

const renderComponent = () =>
  render(
    <HelmetProvider>
      <PrivacyPage />
    </HelmetProvider>,
  );

describe('<PrivacyPage />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
