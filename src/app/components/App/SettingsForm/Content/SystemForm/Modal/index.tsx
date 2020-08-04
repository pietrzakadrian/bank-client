/**
 *
 * Modal
 *
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { StyledModal } from 'app/components/App/Modal/styled';
import { actions } from 'app/containers/SettingsPage/slice';
import { selectSettingsPage } from 'app/containers/SettingsPage/selectors';
import { Button } from 'antd';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';

export function Modal({ form }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { currencies } = useSelector(selectApp);
  const { newData, isOpenedModal } = useSelector(selectSettingsPage);
  const isLoading = useSelector(selectLoading('settingsPage/setUserData'));

  const onSetUserData = () => dispatch(actions.setUserDataRequestAction());
  const onToggleModal = () => {
    form.resetFields();
    dispatch(actions.toggleCurrencyModal());
  };

  console.log(isOpenedModal);

  return (
    <StyledModal
      centered
      title={t(translations.settingsForm.content.systemForm.currency.title)}
      visible={isOpenedModal}
      onOk={onSetUserData}
      onCancel={onToggleModal}
      footer={[
        <Button key="back" onClick={onToggleModal}>
          {t(translations.settingsForm.content.systemForm.cancel)}
        </Button>,
        <Button
          key="submit"
          disabled={isLoading}
          type="primary"
          onClick={onSetUserData}
        >
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            t(translations.settingsForm.content.systemForm.confirm)
          )}
        </Button>,
      ]}
    >
      <p
        dangerouslySetInnerHTML={{
          __html: t(
            translations.settingsForm.content.systemForm.currency
              .tryingChangeDefaultCurrency,
            {
              currency: currencies?.find(
                currency => currency?.uuid === newData?.currency,
              )?.name,
              interpolation: { escapeValue: false },
            },
          ),
        }}
      />

      <p>
        {t(
          translations.settingsForm.content.systemForm.currency
            .tryingChangeDefaultCurrencyConfirm,
        )}
      </p>
    </StyledModal>
  );
}
