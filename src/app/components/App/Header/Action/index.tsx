/**
 *
 * Action
 *
 */
import React from 'react';
import { selectApp } from 'app/containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import { Dropdown, Badge, Popconfirm } from 'antd';
import { translations } from 'locales/i18n';
import { actions } from 'app/containers/App/slice';
import {
  MessageFilled,
  MessageOutlined,
  BellFilled,
  BellOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import {
  StyledAction,
  StyledActionWrapper,
  StyledActionItem,
  StyledActionItemName,
} from './styled';
import { Modal } from './Modal';
import { Messages } from 'app/components/App/Messages';
import { Notifications } from 'app/components/App/Notifications';

export function Action() {
  const { user, messages } = useSelector(selectApp);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 479 });
  const { t } = useTranslation();

  const onLogout = () => dispatch(actions.logoutRequestAction());
  const handleMessages = () => {
    if (!messages?.data?.length) {
      dispatch(actions.getMessagesRequestAction());
    }
  };
  const handleNotifications = () => {
    if (user?.userConfig.notificationCount) {
      dispatch(actions.getNotificationsRequestAction());
    }
  };

  //   const onToggleConfirmModal = () => dispatch(toggleConfirmModalAction());

  return (
    <StyledAction>
      <StyledActionWrapper>
        <Dropdown
          trigger={['click']}
          overlay={<Messages />}
          placement="bottomCenter"
          arrow={!isMobile}
        >
          <StyledActionItem type="link" onClick={handleMessages}>
            <Badge count={user?.userConfig?.messageCount}>
              {user?.userConfig?.messageCount ? (
                <MessageFilled />
              ) : (
                <MessageOutlined />
              )}
            </Badge>
            <StyledActionItemName>
              {t(translations.header.actions.messages.title)}
            </StyledActionItemName>
          </StyledActionItem>
        </Dropdown>

        <Dropdown
          trigger={['click']}
          overlay={<Notifications />}
          placement="bottomCenter"
          arrow={!isMobile}
        >
          <StyledActionItem type="link" onClick={handleNotifications}>
            <Badge count={user?.userConfig?.notificationCount}>
              {user?.userConfig?.notificationCount ? (
                <BellFilled />
              ) : (
                <BellOutlined />
              )}
            </Badge>
            <StyledActionItemName>
              {t(translations.header.actions.notifications.title)}
            </StyledActionItemName>
          </StyledActionItem>
        </Dropdown>

        {isMobile ? (
          <>
            <StyledActionItem type="link">
              <PoweroffOutlined />
              <StyledActionItemName>
                {t(translations.header.actions.logout)}
              </StyledActionItemName>
            </StyledActionItem>

            <Modal />
          </>
        ) : (
          <Popconfirm
            placement="bottomRight"
            title={t(translations.header.actions.popConfirm.title)}
            onConfirm={onLogout}
            okText={t(translations.header.actions.popConfirm.ok)}
            cancelText={t(translations.header.actions.popConfirm.cancel)}
          >
            <StyledActionItem type="link">
              <PoweroffOutlined />
              <StyledActionItemName>
                {t(translations.header.actions.logout)}
              </StyledActionItemName>
            </StyledActionItem>
          </Popconfirm>
        )}
      </StyledActionWrapper>
    </StyledAction>
  );
}
