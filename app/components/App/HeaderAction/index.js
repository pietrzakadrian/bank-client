/* eslint-disable indent */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction, getMessagesAction } from 'containers/App/actions';
import { Popconfirm, Badge, Dropdown } from 'antd';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
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

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

function HeaderAction({ intl }) {
  const {
    user: { userConfig },
  } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 479 });

  const logout = () => dispatch(logoutAction());
  const onGetMessages = () => dispatch(getMessagesAction());

  return (
    <StyledHeaderAction>
      <StyledHeaderWrapper>
        <Dropdown
          trigger={['click']}
          overlay={<Messages />}
          placement="bottomCenter"
          arrow
        >
          <StyledHeaderActionItem type="link" onClick={onGetMessages}>
            <Badge count={userConfig?.messageCount}>
              {userConfig?.messageCount ? (
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

        <StyledHeaderActionItem type="link">
          <Badge count={userConfig?.notificationCount}>
            {userConfig?.notificationCount ? (
              <StyledBellFilled />
            ) : (
              <StyledBellOutlined />
            )}
          </Badge>
          <StyledHeaderActionItemName>
            <FormattedMessage {...messages.notifications} />
          </StyledHeaderActionItemName>
        </StyledHeaderActionItem>

        {isMobile ? (
          <StyledHeaderActionItem type="link" onClick={logout}>
            <StyledPoweroffOutlined />
            <StyledHeaderActionItemName>
              <FormattedMessage {...messages.logout} />
            </StyledHeaderActionItemName>
          </StyledHeaderActionItem>
        ) : (
          <Popconfirm
            placement="bottomRight"
            title={intl.formatMessage(messages.popConfirmTitle)}
            onConfirm={logout}
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
