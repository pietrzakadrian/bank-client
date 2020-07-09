/**
 *
 * SettingsForm
 *
 */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getUserDataAction } from 'containers/SettingsPage/actions';
import { StyledFormWrapper } from 'components/Form/Form.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { GET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import { PersonalSettingsForm, SystemSettingsForm } from '../SettingsContent';
import { SettingsFormWrapper } from './SettingsForm.style';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading([getRequestName(GET_USER_DATA_REQUEST)]),
});

export default function SettingsForm() {
  const { isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

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
            <PersonalSettingsForm />

            <SystemSettingsForm />
          </>
        )}
      </SettingsFormWrapper>
    </StyledFormWrapper>
  );
}
