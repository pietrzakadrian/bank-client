/**
 *
 * TogglePath
 *
 */
import React from 'react';

import { StyledButton } from './styled';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

interface Props {
  name: string;
  path: string;
}

export function TogglePath({ name, path }: Props) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(push(path));

  return (
    <StyledButton key={name} type="link" onClick={onClick}>
      {name}
    </StyledButton>
  );
}
