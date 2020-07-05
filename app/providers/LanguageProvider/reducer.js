/*
 *
 * LanguageProvider reducer
 *
 */

import produce from 'immer';

import { CHANGE_LOCALE } from './constants';
import { DEFAULT_LOCALE, DEFAULT_DATE_FORMAT } from '../../locales';

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
          : `dd.MM.yyyy, hh:mm`;
      break;
  }
}, initialState);

export default languageProviderReducer;
