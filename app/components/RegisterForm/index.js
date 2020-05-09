/**
 *
 * RegisterForm
 *
 */

import React, { useState } from 'react';
import { Steps, Button, message, Form, Input, Select } from 'antd';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
const FirstName = () => (
  <Form.Item
    name="firstname"
    rules={[
      {
        required: true,
        message: 'Please input your firstname!',
      },
    ]}
  >
    <Input placeholder="Input your first name" />
  </Form.Item>
);

const LastName = () => (
  <Form.Item
    name="lastname"
    rules={[
      {
        required: true,
        message: 'Please input your last name!',
      },
    ]}
  >
    <Input placeholder="Input your last name" />
  </Form.Item>
);

const Password = () => (
  <Form.Item
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
  >
    <Input.Password placeholder="Input your password" />
  </Form.Item>
);

const Currency = () => (
  <Form.Item name="gender" rules={[{ required: true }]}>
    <Select
      placeholder="Select a option and change input text above"
      allowClear
    >
      <Select.Option value="male">male</Select.Option>
      <Select.Option value="female">female</Select.Option>
      <Select.Option value="other">other</Select.Option>
    </Select>
  </Form.Item>
);

const EmailAddress = () => (
  <Form.Item
    name="email"
    rules={[
      { type: 'email', required: true, message: 'Please input your email!' },
    ]}
  >
    <Input />
  </Form.Item>
);

const { Step } = Steps;

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
    title: 'E-Mail address',
    content: <EmailAddress />,
  },
];

function RegisterForm() {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <Form name="register">
        <div>{steps[current].content}</div>
      </Form>
      <div>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success('Processing complete!')}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{ margin: '0 8px' }}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </Button>
        )}
      </div>
    </div>
  );
}

RegisterForm.propTypes = {};

export default RegisterForm;
