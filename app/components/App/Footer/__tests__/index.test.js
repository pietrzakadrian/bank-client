import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import configureStore from 'utils/configureStore';
import { Provider } from 'react-redux';
import Footer from '../index';

describe('<Footer />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
