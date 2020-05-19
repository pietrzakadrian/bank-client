import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
