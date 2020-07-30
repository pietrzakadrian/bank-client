/**
 *
 * LocaleToggle
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'antd';
// import { LanguageKey } from 'locales/i18n';

export function LocaleToggle() {
  const { i18n } = useTranslation();
  // const handleLanguageChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>,
  // ) => {
  //   const language = event.target.name as LanguageKey;
  //   i18n.changeLanguage(language);
  // };

  const content = i18n.languages?.map(language => (
    <Select.Option key={language} value={language}>
      {language.toUpperCase()}
    </Select.Option>
  ));

  return <Select defaultValue={i18n.languages?.[0]}>{content}</Select>;
}
