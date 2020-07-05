import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */

const selectLanguage = (state) => state.language || initialState;

/**
 * Select the language locale
 */

const makeSelectLocale = () =>
  createSelector(selectLanguage, (languageState) => languageState.locale);

const makeSelectDateFormat = () =>
  createSelector(selectLanguage, (languageState) => languageState.dateFormat);

export { selectLanguage, makeSelectLocale, makeSelectDateFormat };
