/**
 *
 * ResetPasswordAction
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { makeSelectError } from 'providers/ErrorProvider/selectors';
import { RightOutlined } from '@ant-design/icons';
import {
  StyledFormActionsWrapper,
  StyledButton,
  StyledError,
} from 'components/Form/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { getRequestName } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_REQUEST,
} from 'containers/ResetPasswordPage/constants';
import messages from './messages';

const stateSelector = createStructuredSelector({
  isLoading: makeSelectIsLoading(getRequestName(RESET_PASSWORD_REQUEST)),
  error: makeSelectError(getRequestName(RESET_PASSWORD_ERROR)),
});

function ResetPasswordAction({ onValidateFields }) {
  const { isLoading, error } = useSelector(stateSelector);

  return (
    <StyledFormActionsWrapper>
      <StyledButton
        onClick={onValidateFields}
        disabled={isLoading || !!error}
        type="primary"
        errored={error ? 1 : 0}
      >
        {isLoading && <LoadingIndicator />}

        {error && <StyledError>{error}</StyledError>}

        {!error && !isLoading && (
          <>
            <FormattedMessage {...messages.action} /> <RightOutlined />
          </>
        )}
      </StyledButton>
    </StyledFormActionsWrapper>
  );
}

ResetPasswordAction.propTypes = {
  onValidateFields: PropTypes.func.isRequired,
};

export default ResetPasswordAction;
