import React from 'react';
import { StyledFormItem } from 'components/Form/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/SettingsPage/selectors';
import { changeInputAction, checkEmailAction } from 'containers/App/actions';
import { Input } from 'antd';
import { injectIntl, intlShape } from 'react-intl';
import { disabledSpacesInput } from 'helpers';
import PropTypes from 'prop-types';
import messages from './messages';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});

function EmailAddress({ intl, onValidateFields }) {
  const dispatch = useDispatch();
  const { user } = useSelector(stateSelector);

  const onCheckEmail = (value, reject, resolve) =>
    dispatch(checkEmailAction(value, reject, resolve));
  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  const checkEmailAddressAlreadyExist = (_, value, callback) =>
    new Promise((resolve, reject) => {
      if (value !== user.email) {
        onCheckEmail(value, reject, resolve);
      } else {
        resolve();
      }
    }).catch(() => callback(intl.formatMessage(messages.emailExist)));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="email"
      tailed="true"
      hasFeedback
      rules={[
        {
          type: 'email',
          message: intl.formatMessage(messages.validationEmailValid),
        },
        {
          asyncValidator: checkEmailAddressAlreadyExist,
        },
      ]}
    >
      <Input
        onPressEnter={onValidateFields}
        onKeyPress={disabledSpacesInput}
        onChange={(event) => onChangeInput(event)}
        name="email"
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

EmailAddress.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(EmailAddress);
