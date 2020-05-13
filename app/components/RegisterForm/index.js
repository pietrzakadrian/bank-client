/**
 *
 * RegisterForm
 *
 */

import React, { useState, useEffect } from 'react';
import { Checkbox, Input, Select, Result, Button, Form } from 'antd';
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
  StyledLoadingOutlined,
  StyledSpin,
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
  const [isStartedRegistration, setIsStartedRegistration] = useState(false);
  const isName = /^[a-z ,.'-]+$/i;

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !isName.test(value)) {
      return Promise.reject(new Error('The name entered must be valid.'));
    }

    if (!value && isStartedRegistration) {
      return Promise.reject(new Error('First name is required.'));
    }

    return Promise.resolve();
  };

  useEffect(() => {
    setIsStartedRegistration(true);
  }, [registerPage.firstName]);

  return (
    <StyledFormItem
      label="First name"
      name="firstName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
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

  const isName = /^[a-z ,.'-]+$/i;

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !isName.test(value)) {
      return Promise.reject(new Error('The name entered must be valid.'));
    }

    if (!value) {
      return Promise.reject(new Error('Last name is required.'));
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      label="Last name"
      name="lastName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
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

  const checkLengthOfCharactersInPassword = (_, value) => {
    if (value && value.length > 5) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error('Password must be at least 6 characters long.'),
    );
  };

  return (
    <StyledFormItem
      label="Password"
      name="password"
      rules={[{ validator: checkLengthOfCharactersInPassword }]}
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
  const antIcon = <StyledLoadingOutlined spin />;

  return (
    <StyledFormItem
      label="Currency"
      name="currency"
      rules={[{ required: true, message: 'Currency is required.' }]}
    >
      <Select
        onClick={() =>
          !registerPage.currencies.length && dispatch(getCurrenciesAction())
        }
        notFoundContent={
          registerPage.isLoading ? <StyledSpin indicator={antIcon} /> : null
        }
        onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
        placeholder="Select currency"
      >
        {registerPage.currencies.map((currency) => (
          <Select.Option key={currency.uuid} value={currency.uuid}>
            {currency.name}
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
};

const EmailAddress = () => {
  const { registerPage } = useSelector(stateSelector);
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
          value={registerPage.email}
          placeholder="Enter e-mail address"
        />
      </StyledFormItem>

      <StyledFormItem
        tail="true"
        name="confirm-personal-data"
        valuePropName="checked"
        rules={[{ validator: checkDataProcessingIsAccepted }]}
      >
        <Checkbox
          onChange={(event) =>
            dispatch(changeCheckboxAction(event.target.checked))
          }
        >
          I agree to the processing of my personal data.
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
      'confirm-personal-data',
    ]);
  }, []);

  const onCheck = async () => {
    try {
      await form.validateFields();

      if (current === steps.length - 1) {
        dispatch(registerAction());
      } else {
        setCurrent(current + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledSteps current={current}>
        {steps.map((item, i) => (
          <StyledSteps.Step
            status={
              steps.length === i + 1 ? registerPage.pinCode && 'finish' : null
            }
            key={item.title}
            title={item.title}
          />
        ))}
      </StyledSteps>

      <StyledFormWrapper>
        {registerPage.pinCode ? (
          <Result
            status="success"
            title="The account has been successfully registered!"
            subTitle={`Your PIN code is: ${registerPage.pinCode}. Remember it or save it in a safe place, because you must enter the PIN code when you want to log into the banking system.`}
            extra={[
              <Button key="1" type="primary">
                Log in to the banking system
              </Button>,
            ]}
          />
        ) : (
          <>
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
                  onClick={onCheck}
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
          </>
        )}
      </StyledFormWrapper>
    </>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
