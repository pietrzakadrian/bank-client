import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { StyledButton } from '../styles';

export default function TogglePath({ name, path }) {
  const dispatch = useDispatch();
  const onChangeRoute = (route) => dispatch(push(route));

  return (
    <StyledButton type="link" onClick={() => onChangeRoute(path)}>
      {name}
    </StyledButton>
  );
}

TogglePath.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
