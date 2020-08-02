/**
 *
 * Modal
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import { translations } from 'locales/i18n';
import { actions } from 'app/containers/App/slice';
import { StyledModal } from 'app/components/App/Modal/styled';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import LoadingIndicator from 'app/components/LoadingIndicator';

export function Modal() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(selectLoading('global/logout'));

  const onLogout = () => dispatch(actions.logoutRequestAction());

  return (
    <StyledModal
      title={t(translations.header.actions.logout)}
      visible={false}
      onOk={onLogout}
      footer={[
        <Button key="back">
          {t(translations.header.actions.popConfirm.cancel)}
        </Button>,
        <Button
          key="submit"
          disabled={isLoading}
          type="primary"
          onClick={onLogout}
        >
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            t(translations.header.actions.popConfirm.ok)
          )}
        </Button>,
      ]}
    >
      {t(translations.header.actions.popConfirm.title)}
    </StyledModal>
  );
}
