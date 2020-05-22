import React from 'react';

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
  return (
    <StyledHeaderAction>
      {actions.map((action) => (
        <StyledHeaderActionItem key={action.id}>
          {action.icon}
          <StyledHeaderActionItemName>{action.name}</StyledHeaderActionItemName>
        </StyledHeaderActionItem>
      ))}
    </StyledHeaderAction>
  );
}
