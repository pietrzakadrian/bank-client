import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'utils/configureStore';
import AvailableFunds from '../index';

describe('<AvailableFunds />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render a AvailableFunds', () => {
    const { container } = render(
      <Provider store={store}>
        <AvailableFunds />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
