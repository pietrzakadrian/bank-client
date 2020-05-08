/**
 *
 * RegistrationSteps
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Steps, Button, message } from 'antd';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const { Step } = Steps;

const steps = [
  {
    title: 'First name',
    content: 'First-content',
  },
  {
    title: 'Last name',
    content: 'Second-content',
  },
  {
    title: 'Password',
    content: 'Last-content',
  },
  {
    title: 'Currency',
    content: 'Last-content',
  },
  {
    title: 'E-Mail address',
    content: 'Last-content',
  },
];

function RegistrationSteps() {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
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

RegistrationSteps.propTypes = {};

export default RegistrationSteps;
