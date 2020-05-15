import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';

import Subheader from '../index';

describe('<Subheader />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a information', () => {
    const { container } = render(
      <Provider store={store}>
        <Subheader pageTitle="Registration" />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
