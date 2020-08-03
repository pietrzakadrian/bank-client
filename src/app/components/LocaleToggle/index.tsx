/**
 *
 * LocaleToggle
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { actions as languageActions } from 'app/providers/LanguageProvider/slice';

export function LocaleToggle() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (locale): any => {
    i18n.changeLanguage(locale);
    dispatch(languageActions.changeLocaleAction());
  };

  const content = i18n.languages?.map(language => (
    <Select.Option key={language} value={language}>
      {language.toUpperCase()}
    </Select.Option>
  ));

  return (
    <Select defaultValue={i18n.language} onSelect={handleLanguageChange}>
      {content}
    </Select>
  );
}
