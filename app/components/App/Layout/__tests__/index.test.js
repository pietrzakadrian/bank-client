import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'configureStore';
import Layout from '../index';

describe('<Layout />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Layout />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
