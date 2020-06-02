import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'configureStore';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HeaderAction from '../index';

describe('<HeaderAction />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a HeaderAction', () => {
    const { container } = render(
      <Provider store={store}>
        <HeaderAction />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
