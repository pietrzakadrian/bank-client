import React from 'react';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectIsOpenedModal } from 'containers/App/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { LOGOUT_REQUEST } from 'containers/App/constants';
import { logoutAction, toggleConfirmModalAction } from 'containers/App/actions';
import { StyledModal } from 'components/App/Modal/styles';
import { Button } from 'antd';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from '../messages';

const stateSelector = createStructuredSelector({
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading(getRequestName(LOGOUT_REQUEST)),
});

export default function Modal() {
  const { isOpenedModal, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logoutAction());
  const onToggleConfirmModal = () => dispatch(toggleConfirmModalAction());

  return (
    <FormattedMessage {...messages.logout}>
      {(title) => (
        <StyledModal
          title={title}
          visible={isOpenedModal}
          onOk={onLogout}
          onCancel={onToggleConfirmModal}
          footer={[
            <Button key="back" onClick={onToggleConfirmModal}>
              <FormattedMessage {...messages.popConfirmCancel} />
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
                <FormattedMessage {...messages.popConfirmOk} />
              )}
            </Button>,
          ]}
        >
          <FormattedMessage {...messages.popConfirmTitle} />
        </StyledModal>
      )}
    </FormattedMessage>
  );
}
