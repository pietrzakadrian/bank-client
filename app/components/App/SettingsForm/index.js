/**
 *
 * SettingsForm
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getUserDataAction } from 'containers/SettingsPage/actions';
import { StyledFormWrapper } from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { GET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import { injectIntl, intlShape } from 'react-intl';
import { PersonalSettingsForm, SystemSettingsForm } from '../SettingsContent';
import { SettingsFormWrapper } from './styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading([getRequestName(GET_USER_DATA_REQUEST)]),
});

function SettingsForm({ intl }) {
  const { isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const snippets = {
    success: {
      title: intl.formatMessage(messages.saveDataTitle),
      description: intl.formatMessage(messages.saveDataDescription),
    },
  };

  const onGetUserData = () => dispatch(getUserDataAction());

  useEffect(() => {
    onGetUserData();
  }, []);

  return (
    <StyledFormWrapper shadowed="true">
      <SettingsFormWrapper loaded={isLoading ? 1 : 0}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <PersonalSettingsForm snippets={snippets} />

            <SystemSettingsForm snippets={snippets} />
          </>
        )}
      </SettingsFormWrapper>
    </StyledFormWrapper>
  );
}

SettingsForm.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SettingsForm);
