/**
 *
 * ForgotPasswordRedirect
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {Button} from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { push } from 'connected-react-router';
import { routes } from 'utils';
import { useDispatch } from 'react-redux';
import { StyledButton } from './styles';

function ForgotPasswordRedirect() {
  const dispatch = useDispatch();

  const onRedirect = () => dispatch(push(routes.forgetPassword.path));

  return (
    <StyledButton type="link" onClick={onRedirect}>
      <FormattedMessage {...messages.forgetPasswordAsk} />
    </StyledButton>
  );
}

ForgotPasswordRedirect.propTypes = {};

export default ForgotPasswordRedirect;
