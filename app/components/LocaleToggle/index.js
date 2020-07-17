/*
 *
 * LanguageToggle
 *
 */

import React from 'react';
import { createSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';

import Toggle from 'components/Toggle';

import { appLocales } from 'utils/locales';
import { changeLocale } from 'providers/LanguageProvider/actions';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import messages from './messages';

const stateSelector = createSelector(makeSelectLocale(), (locale) => ({
  locale,
}));

export default function LocaleToggle() {
  const { locale } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const onLocaleToggle = (name) => dispatch(changeLocale(name));

  return (
    <Toggle
      value={locale}
      values={appLocales}
      messages={messages}
      onToggle={onLocaleToggle}
    />
  );
}
