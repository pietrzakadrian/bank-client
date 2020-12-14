import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input, Checkbox } from 'antd';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import { checkEmailAction, changeInputAction } from 'containers/App/actions';
import { makeSelectEmail } from 'containers/ForgetPasswordPage/selectors';

import { StyledFormItem } from 'components/Form/styles';
import PropTypes from 'prop-types';
import { disabledSpacesInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
});

function EmailAddress({ intl, onValidateFields }) {
  const { email } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
 

  return (
    <>
      <StyledFormItem
        label={intl.formatMessage(messages.label)}
        name="email"
        rules={[
          {
            type: 'email',
            message: intl.formatMessage(messages.validation_email_valid),
          },
          {
            required: true,
            message: intl.formatMessage(messages.validation_email_required),
          },
        ]}
      >
        <Input
          onPressEnter={onValidateFields}
          onKeyPress={disabledSpacesInput}
          onChange={(event) => onChangeInput(event)}
          name="email"
          value={email}
          placeholder={intl.formatMessage(messages.placeholder)}
        />
      </StyledFormItem>
    </>
  );
}

EmailAddress.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(EmailAddress);
