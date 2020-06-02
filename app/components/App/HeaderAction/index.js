/* eslint-disable indent */
import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'containers/App/actions';
import { Popconfirm } from 'antd';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { useMediaQuery } from 'react-responsive';
import {
  StyledHeaderAction,
  StyledHeaderActionItem,
  StyledHeaderActionItemName,
  StyledMessageOutlined,
  StyledBellOutlined,
  StyledPoweroffOutlined,
  StyledHeaderWrapper,
} from './HeaderAction.style';
import messages from './messages';

const actions = [
  {
    id: 1,
    name: <FormattedMessage {...messages.messages} />,
    icon: <StyledMessageOutlined />,
  },
  {
    id: 2,
    name: <FormattedMessage {...messages.notifications} />,
    icon: <StyledBellOutlined />,
  },
  {
    id: 3,
    name: <FormattedMessage {...messages.logout} />,
    icon: <StyledPoweroffOutlined />,
  },
];

function HeaderAction({ intl }) {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 479 });

  const logout = () => dispatch(logoutAction());

  return (
    <StyledHeaderAction>
      {actions.map((action, index, arr) => (
        <StyledHeaderWrapper key={action.id}>
          {(!isMobile && arr.length - 1 === index && (
            <Popconfirm
              placement="bottomRight"
              title={intl.formatMessage(messages.popConfirmTitle)}
              onConfirm={logout}
              okText={intl.formatMessage(messages.popConfirmOk)}
              cancelText={intl.formatMessage(messages.popConfirmCancel)}
            >
              <StyledHeaderActionItem type="link">
                {action.icon}
                <StyledHeaderActionItemName>
                  {action.name}
                </StyledHeaderActionItemName>
              </StyledHeaderActionItem>
            </Popconfirm>
          )) ||
            (arr.length - 1 === index && (
              <StyledHeaderActionItem type="link" onClick={logout}>
                {action.icon}
                <StyledHeaderActionItemName>
                  {action.name}
                </StyledHeaderActionItemName>
              </StyledHeaderActionItem>
            )) || (
              <StyledHeaderActionItem type="link">
                {action.icon}
                <StyledHeaderActionItemName>
                  {action.name}
                </StyledHeaderActionItemName>
              </StyledHeaderActionItem>
            )}
        </StyledHeaderWrapper>
      ))}
    </StyledHeaderAction>
  );
}

HeaderAction.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(HeaderAction);
