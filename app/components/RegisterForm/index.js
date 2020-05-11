/**
 *
 * RegisterForm
 *
 */

import React, { useState, useEffect } from 'react';
import { Checkbox, Input, Select, Form } from 'antd';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrenciesAction,
  changeInputAction,
  selectCurrencyAction,
  changeCheckboxAction,
  registerAction,
  checkEmailAction,
} from '../../containers/RegisterPage/actions';

import {
  StyledSteps,
  StyledStep,
  StyledFormWrapper,
  StyledForm,
  StyledFormItem,
  StyledFormActionsWrapper,
  StyledInformation,
  StyledButton,
} from './RegisterForm.style';
import makeSelectRegisterPage from '../../containers/RegisterPage/selectors';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const FirstName = () => {
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isFirstName, setIsFirstName] = useState(false);

  useEffect(() => {
    setIsFirstName(true);
  }, [registerPage.firstName]);

  return (
    <StyledFormItem
      label="First name"
      name="firstName"
      rules={[
        {
          required: isFirstName,
          message: 'First name is required.',
        },
      ]}
    >
      <Input
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="firstName"
        value={registerPage.firstName}
        placeholder="Enter first name"
      />
    </StyledFormItem>
  );
};

const LastName = () => {
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isLastName, setIsLastName] = useState(false);

  useEffect(() => {
    setIsLastName(true);
  }, [registerPage.lastName]);

  return (
    <StyledFormItem
      label="Last name"
      name="lastName"
      rules={[
        {
          required: isLastName,
          message: 'Last name is required.',
        },
      ]}
    >
      <Input
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="lastName"
        value={registerPage.lastName}
        placeholder="Enter last name"
      />
    </StyledFormItem>
  );
};

const Password = () => {
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isPassword, checkIsPassword] = useState(false);

  useEffect(() => {
    checkIsPassword(true);
  }, [registerPage.password]);

  // const asyncValidator = (rule, value, callback) => {
  //   if (value && value.length < 5) {
  //     callback('Password must have a minimum of 6 characters.');
  //   }
  // };

  return (
    <StyledFormItem
      label="Password"
      name="password"
      rules={[{ required: isPassword, message: 'Password is required.' }]}
    >
      <Input.Password
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="password"
        value={registerPage.password}
        placeholder="Enter password"
      />
    </StyledFormItem>
  );
};

const Currency = () => {
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isCurrency, checkIsCurrency] = useState(false);

  useEffect(() => {
    checkIsCurrency(true);
  }, [registerPage.currency]);

  return (
    <StyledFormItem
      label="Currency"
      name="currency"
      rules={[{ required: isCurrency, message: 'Currency is required.' }]}
    >
      <Select
        loading={registerPage.isLoading}
        onClick={() =>
          !registerPage.currencies.length && dispatch(getCurrenciesAction())
        }
        onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
        placeholder="Select currency"
      >
        {registerPage.currencies.length &&
          registerPage.currencies.map((currency) => (
            <Select.Option key={currency.uuid} value={currency.uuid}>
              {currency.name}
            </Select.Option>
          ))}

        {/* <Cascader options={registerPage.currencies} /> */}
      </Select>
    </StyledFormItem>
  );
};

const EmailAddress = () => {
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isEmailAddress, checkIsEmailAddress] = useState(false);

  useEffect(() => {
    checkIsEmailAddress(true);
  }, [registerPage.email]);

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
            required: isEmailAddress,
            message: 'E-Mail address is required.',
          },
          {
            asyncValidator: (_, value) =>
              new Promise((resolve, reject) => {
                dispatch(checkEmailAction(value, reject, resolve));
              }),
          },
        ]}
      >
        <Input
          onChange={(event) => dispatch(changeInputAction(event.target))}
          name="email"
          value={registerPage.email}
          placeholder="Enter e-mail address"
        />
      </StyledFormItem>

      <StyledFormItem
        tail="true"
        name="remember"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox
          onChange={(event) =>
            dispatch(changeCheckboxAction(event.target.checked))
          }
        >
          I consent to the processing of my personal data.
        </Checkbox>
      </StyledFormItem>

      <StyledInformation>
        Registration does not require confirmation by the email.
      </StyledInformation>
    </>
  );
};

const steps = [
  {
    title: 'First name',
    content: <FirstName />,
  },
  {
    title: 'Last name',
    content: <LastName />,
  },
  {
    title: 'Password',
    content: <Password />,
  },
  {
    title: 'Currency',
    content: <Currency />,
  },
  {
    title: 'E-Mail Address',
    content: <EmailAddress />,
  },
];

const stateSelector = createStructuredSelector({
  registerPage: makeSelectRegisterPage(),
});

function RegisterForm() {
  const [current, setCurrent] = useState(0);
  const { registerPage } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    form.validateFields([
      'firstName',
      'lastName',
      'password',
      'currency',
      'email',
    ]);
  }, []);

  const onCheck = async () => {
    try {
      await form.validateFields();
      setCurrent(current + 1);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <>
      <StyledSteps current={current}>
        {steps.map((item) => (
          <StyledStep key={item.title} title={item.title} />
        ))}
      </StyledSteps>

      <StyledFormWrapper>
        <StyledForm form={form} layout="vertical" name="register">
          <div>{steps[current].content}</div>
        </StyledForm>

        <StyledFormActionsWrapper>
          {current < steps.length - 1 && (
            <StyledButton
              disabled={registerPage.isLoading}
              type="primary"
              onClick={onCheck}
            >
              Next <RightOutlined />
            </StyledButton>
          )}
          {current === steps.length - 1 && (
            <StyledButton
              disabled={registerPage.isLoading}
              type="primary"
              onClick={() => dispatch(registerAction())}
            >
              Create an account
            </StyledButton>
          )}
          {current > 0 && (
            <StyledButton
              disabled={registerPage.isLoading}
              type="link"
              back="true"
              onClick={() => setCurrent(current - 1)}
            >
              <LeftOutlined /> Back
            </StyledButton>
          )}
        </StyledFormActionsWrapper>
      </StyledFormWrapper>
    </>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
