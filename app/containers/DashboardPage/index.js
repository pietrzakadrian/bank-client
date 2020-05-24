/**
 *
 * DashboardPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Greeting from 'components/App/Greeting';
// import makeSelectDashboardPage from './selectors';
import AvailableFunds from 'components/App/AvailableFunds';
import Savings from 'components/App/Savings';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
//   dashboardPage: makeSelectDashboardPage(),
// });

export default function DashboardPage() {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  /* eslint-disable no-unused-vars */
  // const { dashboardPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  /* eslint-enable no-unused-vars */

  return (
    <div>
      <Helmet>
        <title>DashboardPage</title>
        <meta name="description" content="Description of DashboardPage" />
      </Helmet>
      <Greeting />

      <div style={{ display: 'flex', maxWidth: 960, margin: '0 auto' }}>
        <AvailableFunds />
        <Savings />
      </div>
    </div>
  );
}
