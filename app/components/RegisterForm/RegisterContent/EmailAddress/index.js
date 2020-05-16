import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input, Checkbox } from 'antd';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import {
  changeInputAction,
  checkEmailAction,
} from 'containers/RegisterPage/actions';
import { makeSelectEmail } from 'containers/RegisterPage/selectors';
import messages from './messages';
import { StyledFormItem, StyledInformation } from '../../RegisterForm.style';

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
});

function EmailAddress({ intl }) {
  const { email } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const checkEmailAddressAlreadyExist = (_, value, callback) =>
    new Promise((resolve, reject) =>
      dispatch(checkEmailAction(value, reject, resolve)),
    ).catch(() => callback(intl.formatMessage(messages.emailExist)));

  const checkDataProcessingIsAccepted = (_, value) => {
    if (value) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        intl.formatMessage(messages.validation_processing_personal_data),
      ),
    );
  };

  return (
    <>
      <StyledFormItem
        label="E-Mail address"
        name="email"
        hasFeedback
        rules={[
          {
            type: 'email',
            message: intl.formatMessage(messages.validation_email_valid),
          },
          {
            required: true,
            message: intl.formatMessage(messages.validation_email_required),
          },
          { asyncValidator: checkEmailAddressAlreadyExist },
        ]}
      >
        <Input
          onChange={(event) => dispatch(changeInputAction(event.target))}
          name="email"
          value={email}
          placeholder={intl.formatMessage(messages.placeholder)}
        />
      </StyledFormItem>

      <StyledFormItem
        tail="true"
        name="confirm-personal-data"
        valuePropName="checked"
        rules={[{ validator: checkDataProcessingIsAccepted }]}
      >
        <Checkbox>
          <FormattedMessage {...messages.checkbox_content} />
        </Checkbox>
      </StyledFormItem>

      <StyledInformation>
        <FormattedMessage {...messages.information} />
      </StyledInformation>
    </>
  );
}

EmailAddress.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(EmailAddress);
