import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'utils/configureStore';
import HistoryPage from '../index';

const renderer = new ShallowRenderer();

describe('<HistoryPage />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should render and match the snapshot', () => {
    renderer.render(
      <Provider store={store}>
        <HistoryPage />
      </Provider>,
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
