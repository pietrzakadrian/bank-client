import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import * as actions from 'containers/LanguageProvider/actions';
import LanguageProvider from 'containers/LanguageProvider';
import LocaleToggle from '../index';

import configureStore from '../../../configureStore';
import { translationMessages } from '../../../i18n';

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
