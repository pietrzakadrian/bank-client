import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from 'containers/App/actions';
import { Popconfirm } from 'antd';
import {
  StyledHeaderAction,
  StyledHeaderActionItem,
  StyledHeaderActionItemName,
  StyledMessageOutlined,
  StyledBellOutlined,
  StyledPoweroffOutlined,
} from './HeaderAction.style';

const actions = [
  {
    id: 1,
    name: 'Messages',
    icon: <StyledMessageOutlined />,
  },
  {
    id: 2,
    name: 'Notifications',
    icon: <StyledBellOutlined />,
  },
  {
    id: 3,
    name: 'Logout',
    icon: <StyledPoweroffOutlined />,
  },
];

export default function HeaderAction() {
  const dispatch = useDispatch();
  const logout = () => dispatch(logoutAction());

  return (
    <StyledHeaderAction>
      {actions.map((action, index, arr) => (
        <div style={{ display: 'flex' }} key={action.id}>
          {arr.length - 1 === index ? (
            <Popconfirm
              placement="bottomRight"
              title="Are you sure you want to log out?"
              onConfirm={logout}
              okText="Yes"
              cancelText="Cancel"
            >
              <StyledHeaderActionItem type="link">
                {action.icon}
                <StyledHeaderActionItemName>
                  {action.name}
                </StyledHeaderActionItemName>
              </StyledHeaderActionItem>
            </Popconfirm>
          ) : (
            <StyledHeaderActionItem type="link">
              {action.icon}
              <StyledHeaderActionItemName>
                {action.name}
              </StyledHeaderActionItemName>
            </StyledHeaderActionItem>
          )}
        </div>
      ))}
    </StyledHeaderAction>
  );
}
