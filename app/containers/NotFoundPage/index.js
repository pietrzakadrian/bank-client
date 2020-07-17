/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import { routes } from 'utils';
import { Result, Button } from 'antd';
import Footer from 'components/Footer';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Helmet } from 'react-helmet-async';
import ConstantCookie from '../../components/ConstantCookie';
import messages from './messages';

export default function NotFoundPage() {
  const dispatch = useDispatch();

  return (
    <>
      <FormattedMessage {...messages.notFoundPage}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <Header />
      <Subheader pageTitle={routes.notFound.name} />

      <FormattedMessage {...messages.sorryThisPageIsUnavailable}>
        {(title) => (
          <FormattedMessage {...messages.sorrySubheader}>
            {(subTitle) => (
              <Result
                status="error"
                title={title}
                subTitle={subTitle}
                extra={[
                  <Button
                    type="primary"
                    key="return"
                    onClick={() => dispatch(push(routes.dashboard.path))}
                  >
                    <FormattedMessage {...messages.backToApp} />
                  </Button>,
                ]}
              />
            )}
          </FormattedMessage>
        )}
      </FormattedMessage>

      <Footer />

      <ConstantCookie />
    </>
  );
}
