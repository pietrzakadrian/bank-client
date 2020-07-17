import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider, defineMessages } from 'react-intl';
import { DEFAULT_LOCALE } from 'utils/locales';
import Toggle from '../index';

describe('<Toggle />', () => {
  it('should contain default text', () => {
    const defaultEnMessage = 'someContent';
    const messages = defineMessages({
      en: {
        id: 'boilerplate.containers.LocaleToggle.en',
        defaultMessage: defaultEnMessage,
      },
    });
    const { container } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Toggle values={['en']} messages={messages} />
      </IntlProvider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  //   it('should not have ToggleOptions if props.values is not defined', () => {
  //     const { container } = render(<Toggle />);
  //     const elements = container.querySelectorAll('option');
  //     expect(elements).toHaveLength(1);
  //     expect(container.firstChild).toHaveTextContent('--');
  //   });
});
