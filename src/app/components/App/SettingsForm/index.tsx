/**
 *
 * SettingsForm
 *
 */
import React, { useEffect } from 'react';
import { StyledFormWrapper } from 'app/components/Form/styled';
import { useSelector, useDispatch } from 'react-redux';
import { actions as appActions } from 'app/containers/App/slice';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { SettingsFormWrapper } from './styled';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { PersonalForm } from './Content/PersonalForm';
import { SystemForm } from './Content/SystemForm';

export function SettingsForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading('global/getUser'));

  const onGetUser = () => dispatch(appActions.getUserRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    onGetUser();
  });

  return (
    <StyledFormWrapper shadowed="true">
      <SettingsFormWrapper loaded={isLoading ? 1 : 0}>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <>
            <PersonalForm />

            <SystemForm />
          </>
        )}
      </SettingsFormWrapper>
    </StyledFormWrapper>
  );
}
