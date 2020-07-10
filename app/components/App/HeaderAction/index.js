/* eslint-disable indent */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  logoutAction,
  getMessagesAction,
  getNotificationsAction,
  toggleConfirmModalAction,
} from 'containers/App/actions';
import { Popconfirm, Badge, Dropdown, Button } from 'antd';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectUser,
  makeSelectMessages,
  makeSelectIsOpenedModal,
} from 'containers/App/selectors';
import { StyledModal } from 'components/App/Modal/Modal.style';
import { getRequestName } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { LOGOUT_REQUEST } from 'containers/App/constants';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledHeaderAction,
  StyledHeaderActionItem,
  StyledHeaderActionItemName,
  StyledMessageOutlined,
  StyledBellOutlined,
  StyledPoweroffOutlined,
  StyledHeaderWrapper,
  StyledBellFilled,
  StyledMessageFilled,
} from './HeaderAction.style';
import messages from './messages';
import Messages from '../Messages';
import Notifications from '../Notifications';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  messagesData: makeSelectMessages(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading(getRequestName(LOGOUT_REQUEST)),
});

function HeaderAction({ intl }) {
  const { messagesData, user, isOpenedModal, isLoading } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 479 });

  const onLogout = () => dispatch(logoutAction());
  const onGetMessages = () => dispatch(getMessagesAction());
  const onGetNotifications = () => dispatch(getNotificationsAction());
  const onToggleConfirmModal = () => dispatch(toggleConfirmModalAction());

  return (
    <StyledHeaderAction>
      <StyledHeaderWrapper>
        <Dropdown
          trigger={['click']}
          overlay={<Messages />}
          placement="bottomCenter"
          arrow={!isMobile}
          getPopupContainer={(trigger) => trigger.parentNode}
        >
          <StyledHeaderActionItem
            type="link"
            onClick={!messagesData?.data?.length && onGetMessages}
          >
            <Badge count={user?.userConfig?.messageCount}>
              {user?.userConfig?.messageCount ? (
                <StyledMessageFilled />
              ) : (
                <StyledMessageOutlined />
              )}
            </Badge>
            <StyledHeaderActionItemName>
              <FormattedMessage {...messages.messages} />
            </StyledHeaderActionItemName>
          </StyledHeaderActionItem>
        </Dropdown>

        <Dropdown
          trigger={['click']}
          overlay={<Notifications />}
          placement="bottomCenter"
          arrow={!isMobile}
          getPopupContainer={(trigger) => trigger.parentNode}
        >
          <StyledHeaderActionItem
            type="link"
            onClick={user?.userConfig?.notificationCount && onGetNotifications}
          >
            <Badge count={user?.userConfig?.notificationCount}>
              {user?.userConfig?.notificationCount ? (
                <StyledBellFilled />
              ) : (
                <StyledBellOutlined />
              )}
            </Badge>
            <StyledHeaderActionItemName>
              <FormattedMessage {...messages.notifications} />
            </StyledHeaderActionItemName>
          </StyledHeaderActionItem>
        </Dropdown>

        {isMobile ? (
          <>
            <StyledHeaderActionItem type="link" onClick={onToggleConfirmModal}>
              <StyledPoweroffOutlined />
              <StyledHeaderActionItemName>
                <FormattedMessage {...messages.logout} />
              </StyledHeaderActionItemName>
            </StyledHeaderActionItem>

            <StyledModal
              title={intl.formatMessage(messages.logout)}
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
          </>
        ) : (
          <Popconfirm
            placement="bottomRight"
            title={intl.formatMessage(messages.popConfirmTitle)}
            onConfirm={onLogout}
            okText={intl.formatMessage(messages.popConfirmOk)}
            cancelText={intl.formatMessage(messages.popConfirmCancel)}
          >
            <StyledHeaderActionItem type="link">
              <StyledPoweroffOutlined />
              <StyledHeaderActionItemName>
                <FormattedMessage {...messages.logout} />
              </StyledHeaderActionItemName>
            </StyledHeaderActionItem>
          </Popconfirm>
        )}
      </StyledHeaderWrapper>
    </StyledHeaderAction>
  );
}

HeaderAction.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HeaderAction);
