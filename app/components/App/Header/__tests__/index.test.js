import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import configureStore from 'configureStore';
import Header from '../index';

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
