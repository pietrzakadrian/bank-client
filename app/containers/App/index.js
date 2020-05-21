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
import { routes } from 'utils';
import 'antd/dist/antd.less';
import 'sanitize.css/sanitize.css';
import GlobalStyle from 'global-styles';
import { useInjectSaga } from 'redux-injectors';
import saga from './saga';
import StyledLayout from '../../components/App/Layout';

function App() {
  useInjectSaga({ key: 'app', saga });

  return (
    <div>
      <Switch>
        <StyledLayout>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
          </Switch>
        </StyledLayout>

        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.register} component={RegisterPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

export default hot(App);
