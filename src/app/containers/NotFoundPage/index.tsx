/**
 *
 * NotFoundPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from 'app/components/Header';
import { Subheader } from 'app/components/Subheader';
import { Footer } from 'app/components/Footer';
import { ConstantCookie } from 'app/components/ConstantCookie';
import { Result, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { push } from 'connected-react-router';
import routes from 'utils/routes';
import { translations } from 'locales/i18n';

export function NotFoundPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const onClick = () => dispatch(push(routes.dashboard.path));

  return (
    <>
      <Helmet>
        <title>{t(translations.notFound.title)}</title>
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.notFound.name} />

      <Result
        status="error"
        title={t(translations.notFound.title)}
        subTitle={t(translations.notFound.subheader)}
        extra={[
          <Button type="primary" key="return" onClick={onClick}>
            {t(translations.notFound.backToApp)}
          </Button>,
        ]}
      />

      <Footer />

      <ConstantCookie />
    </>
  );
}
