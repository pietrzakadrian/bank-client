/**
 *
 * TogglePath
 *
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButton } from './styled';

interface Props {
  name: string;
  path: string;
}

export function TogglePath({ name, path }: Props) {
  const history = useHistory();
  const handleClick = () => history.push(path);

  return (
    <StyledButton key={name} type="link" onClick={handleClick}>
      {name}
    </StyledButton>
  );
}
