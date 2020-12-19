/* eslint-disable consistent-return */
/* eslint-disable default-case */
/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegisterPage from 'containers/RegisterPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import PaymentPage from 'containers/PaymentPage/Loadable';
import HistoryPage from 'containers/HistoryPage/Loadable';
import SettingsPage from 'containers/SettingsPage/Loadable';
import PrivacyPage from 'containers/PrivacyPage/Loadable';
import ForgetPassword from 'containers/ForgetPasswordPage/Loadable';
import ResetPassword from 'containers/ResetPasswordPage/Loadable';

import { ConfigProvider } from 'antd';
import Layout from 'components/App/Layout';
import { routes } from 'utils';
import 'antd/dist/antd.less';
import 'sanitize.css/sanitize.css';
import GlobalStyle from 'utils/styles';
import { useInjectSaga } from 'redux-injectors';
import PrivateRoute from 'components/Route/PrivateRoute';
import PublicRoute from 'components/Route/PublicRoute';
import enUS from 'antd/es/locale/en_US';
import plPL from 'antd/es/locale/pl_PL';
import deDE from 'antd/es/locale/de_DE';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import saga from './saga';


const stateSelector = createStructuredSelector({
  locale: makeSelectLocale(),
});

function App() {
  useInjectSaga({ key: 'app', saga });

  const { locale } = useSelector(stateSelector);

  const getLocale = (language) => {
    switch (language) {
      case 'de':
        return deDE;
      case 'pl':
        return plPL;
      case 'en':
        return enUS;
    }
  };

  return (
    <ConfigProvider locale={getLocale(locale)}>
      <div>
        <Switch>
          <Route
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
            path={routes.register.path}
            component={RegisterPage}
          />
          <PublicRoute path={routes.privacy.path} component={PrivacyPage} />
          <PublicRoute
            restricted
            path={routes.forgetPassword.path}
            component={ForgetPassword}
          />
          <PublicRoute
            restricted
            path={`${routes.resetPassword.path}/:token`}
            component={ResetPassword}
          />
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
              <PrivateRoute
                path={routes.payment.path}
                component={PaymentPage}
              />
              <PrivateRoute
                path={routes.history.path}
                component={HistoryPage}
              />
              <PrivateRoute
                path={routes.settings.path}
                component={SettingsPage}
              />

              <Redirect to={routes.notFound.path} />
            </Switch>
          </Layout>
        </Switch>
        <GlobalStyle />
      </div>
    </ConfigProvider>
  );
}

export default hot(App);
