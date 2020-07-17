/**
 *
 * SettingsPage
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import SettingsForm from 'components/App/SettingsForm';
import { FormattedMessage } from 'react-intl';
import { getAlertCount } from 'helpers';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

export default function SettingsPage() {
  useInjectReducer({ key: 'settingsPage', reducer });
  useInjectSaga({ key: 'settingsPage', saga });

  const { user } = useSelector(stateSelector);

  return (
    <>
      <FormattedMessage {...messages.settings}>
        {(title) => <Helmet title={`${getAlertCount(user)} ${title}`} />}
      </FormattedMessage>

      <SettingsForm />
    </>
  );
}
