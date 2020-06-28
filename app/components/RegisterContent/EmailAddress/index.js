import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input, Checkbox } from 'antd';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import { checkEmailAction } from 'containers/RegisterPage/actions';
import { changeInputAction } from 'containers/App/actions';
import { makeSelectEmail } from 'containers/RegisterPage/selectors';
import { StyledInformation } from 'components/RegisterForm/RegisterForm.style';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
});

function EmailAddress({ intl }) {
  const { email } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));
  const onCheckEmail = (value, reject, resolve) =>
    dispatch(checkEmailAction(value, reject, resolve));

  const checkEmailAddressAlreadyExist = (_, value, callback) =>
    new Promise((resolve, reject) =>
      onCheckEmail(value, reject, resolve),
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
          onChange={(event) => onChangeInput(event)}
          name="email"
          value={email}
          placeholder={intl.formatMessage(messages.placeholder)}
        />
      </StyledFormItem>

      <StyledFormItem
        tailed="true"
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
