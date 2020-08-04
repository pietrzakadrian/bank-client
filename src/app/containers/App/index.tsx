/**
 *
 * App
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Redirect } from 'react-router-dom';
import routes from 'utils/routes';
import { GlobalStyle } from 'styles/global-styles';
import { useInjectSaga } from 'utils/redux-injectors';
import { sliceKey } from './slice';
import { appSaga } from './saga';
import {
  Public as PublicRoute,
  Private as PrivateRoute,
} from 'app/components/Route';

import { Layout } from 'app/components/App/Layout';

import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { NotFoundPage } from 'app/containers/NotFoundPage/Loadable';
import { DashboardPage } from 'app/containers/DashboardPage/Loadable';
import { RegistrationPage } from 'app/containers/RegistrationPage/Loadable';
import { PaymentPage } from 'app/containers/PaymentPage/Loadable';

import { PrivacyPage } from 'app/containers/PrivacyPage/Loadable';
import { HistoryPage } from 'app/containers/HistoryPage/Loadable';
import { SettingsPage } from 'app/containers/SettingsPage/Loadable';

export function App() {
  useInjectSaga({ key: sliceKey, saga: appSaga });

  return (
    <>
      <Helmet
        titleTemplate="%s - Bank Application"
        defaultTitle="Bank Application"
      >
        <meta name="description" content="Bank Application" />
      </Helmet>

      <Switch>
        <PublicRoute
          restricted
          exact
          path={routes.home.path}
          component={HomePage}
        />
        <PublicRoute
          restricted
          path={routes.login.path}
          component={LoginPage}
        />
        <PublicRoute
          restricted
          path={routes.registration.path}
          component={RegistrationPage}
        />
        <PublicRoute path={routes.privacy.path} component={PrivacyPage} />

        <PublicRoute
          exact
          path={routes.notFound.path}
          component={NotFoundPage}
        />

        <Layout>
          <Switch>
            <PrivateRoute
              exact
              path={routes.dashboard.path}
              component={DashboardPage}
            />
            <PrivateRoute path={routes.payment.path} component={PaymentPage} />
            <PrivateRoute path={routes.history.path} component={HistoryPage} />
            <PrivateRoute
              path={routes.settings.path}
              component={SettingsPage}
            />

            <Redirect to={routes.notFound.path} />
          </Switch>
        </Layout>
      </Switch>
      <GlobalStyle />
    </>
  );
}
