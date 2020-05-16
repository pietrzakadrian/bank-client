import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';

import { makeSelectPassword } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/RegisterPage/actions';
// import { FormattedMessage } from 'react-intl';
import { StyledFormItem } from '../../RegisterForm.style';
// import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

export default function Password() {
  const { password } = useSelector(stateSelector);
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
        value={password}
        placeholder="Enter password"
      />
    </StyledFormItem>
  );
}
