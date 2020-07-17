import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import * as actions from 'providers/LanguageProvider/actions';
import LanguageProvider from 'providers/LanguageProvider';

import configureStore from 'utils/configureStore';
import { translationMessages } from 'utils/i18n';
import LocaleToggle from '../index';

describe('<LocaleToggle />', () => {
  let store;

  beforeAll(() => {
    actions.changeLocale = jest.fn(() => ({ type: 'test' }));
    store = configureStore({});
  });

  it('should match the snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <LanguageProvider messages={translationMessages}>
          <LocaleToggle />
        </LanguageProvider>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  //   it('should dispatch changeLocale when user selects a new option', () => {
  //     const { container } = render(
  //       <Provider store={store}>
  //         <LanguageProvider messages={translationMessages}>
  //           <LocaleToggle />
  //         </LanguageProvider>
  //       </Provider>,
  //     );
  //     const newLocale = 'de';
  //     const select = container.querySelector('select');
  //     fireEvent.change(select, { target: { value: newLocale } });
  //     expect(actions.changeLocale).toHaveBeenCalledWith(newLocale);
  //   });
});
