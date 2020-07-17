/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import { DEFAULT_LOCALE, DEFAULT_DATE_FORMAT } from 'utils/locales';
import { CHANGE_LOCALE } from './constants';

export const initialState = {
  locale: DEFAULT_LOCALE,
  dateFormat: DEFAULT_DATE_FORMAT,
};

/* eslint-disable default-case, no-param-reassign */
const languageProviderReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      draft.locale = action.locale;
      draft.dateFormat =
        action.locale === DEFAULT_LOCALE
          ? `dd.MM.yyyy, hh:mm aa`
          : `dd.MM.yyyy, HH:mm`;
      break;
  }
}, initialState);

export default languageProviderReducer;
