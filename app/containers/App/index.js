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

import { routes } from 'utils';
import 'antd/dist/antd.less';
import 'sanitize.css/sanitize.css';
import GlobalStyle from 'global-styles';
import { useInjectSaga } from 'redux-injectors';
import Layout from 'components/App/Layout';
import saga from './saga';

function App() {
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />

        <Layout>
          <Switch>
            <Route exact path={routes.dashboard} component={DashboardPage} />
          </Switch>
        </Layout>

        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default hot(App);
