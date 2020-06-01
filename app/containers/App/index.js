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
import Layout from 'components/App/Layout';

import { routes } from 'utils';
import 'antd/dist/antd.less';
import 'sanitize.css/sanitize.css';
import GlobalStyle from 'global-styles';
import { useInjectSaga } from 'redux-injectors';
import saga from './saga';
import PrivateRoute from '../../components/Route/PrivateRoute';
import PublicRoute from '../../components/Route/PublicRoute';

function App() {
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Switch>
        <PublicRoute exact path={routes.home.path} component={HomePage} />
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

        <Layout>
          <Switch>
            <PrivateRoute
              exact
              path={routes.dashboard.path}
              component={DashboardPage}
            />
          </Switch>
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default hot(App);
