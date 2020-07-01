/* eslint-disable indent */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from 'containers/App/actions';
import { Popconfirm, Badge } from 'antd';
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

  return (
    <StyledHeaderAction>
      <StyledHeaderWrapper>
        <StyledHeaderActionItem type="link">
          <Badge count={userConfig?.messagesCount}>
            {userConfig?.messagesCount ? (
              <StyledMessageFilled />
            ) : (
              <StyledMessageOutlined />
            )}
          </Badge>
          <StyledHeaderActionItemName>
            <FormattedMessage {...messages.messages} />
          </StyledHeaderActionItemName>
        </StyledHeaderActionItem>

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
