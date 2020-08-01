/**
 *
 * App
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import routes from 'utils/routes';
import { GlobalStyle } from 'styles/global-styles';
import { HomePage } from 'app/containers/HomePage/Loadable';
import { LoginPage } from 'app/containers/LoginPage/Loadable';
import { NotFoundPage } from 'app/containers/NotFoundPage/Loadable';
import { RegistrationPage } from 'app/containers/RegistrationPage/Loadable';
import { PrivacyPage } from 'app/containers/PrivacyPage/Loadable';
import { useInjectSaga } from 'utils/redux-injectors';
import { sliceKey } from './slice';
import { appSaga } from './saga';

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
        <Route exact path={routes.home.path} component={HomePage} />
        <Route path={routes.login.path} component={LoginPage} />
        <Route path={routes.registration.path} component={RegistrationPage} />
        <Route path={routes.privacy.path} component={PrivacyPage} />

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </>
  );
}
