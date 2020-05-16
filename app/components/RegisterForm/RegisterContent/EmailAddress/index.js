import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input, Checkbox } from 'antd';
// import { FormattedMessage } from 'react-intl';
import {
  changeInputAction,
  checkEmailAction,
} from 'containers/RegisterPage/actions';
import { makeSelectEmail } from 'containers/RegisterPage/selectors';
// import messages from './messages';
import { StyledFormItem, StyledInformation } from '../../RegisterForm.style';

const stateSelector = createStructuredSelector({
  email: makeSelectEmail(),
});

export default function EmailAddress() {
  const { email } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const checkEmailAddressAlreadyExist = (_, value) =>
    new Promise((resolve, reject) =>
      dispatch(checkEmailAction(value, reject, resolve)),
    );

  const checkDataProcessingIsAccepted = (_, value) => {
    if (value) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(
        'Confirmation of consent to the processing of personal data is required.',
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
            message: 'E-Mail address must be valid.',
          },
          {
            required: true,
            message: 'E-Mail address is required.',
          },
          { asyncValidator: checkEmailAddressAlreadyExist },
        ]}
      >
        <Input
          onChange={(event) => dispatch(changeInputAction(event.target))}
          name="email"
          value={email}
          placeholder="Enter e-mail address"
        />
      </StyledFormItem>

      <StyledFormItem
        tail="true"
        name="confirm-personal-data"
        valuePropName="checked"
        rules={[{ validator: checkDataProcessingIsAccepted }]}
      >
        <Checkbox>I agree to the processing of my personal data.</Checkbox>
      </StyledFormItem>

      <StyledInformation>
        Registration does not require confirmation by the email.
      </StyledInformation>
    </>
  );
}
