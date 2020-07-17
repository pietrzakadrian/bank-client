import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'utils/configureStore';

import Drawer from '../index';

describe('<Drawer />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Drawer />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
