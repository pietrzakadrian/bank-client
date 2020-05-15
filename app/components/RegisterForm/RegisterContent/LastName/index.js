import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectLastName } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/RegisterPage/actions';
import { StyledFormItem } from '../../RegisterForm.style';

const stateSelector = createStructuredSelector({
  lastName: makeSelectLastName(),
});

export default function LastName() {
  const { lastName } = useSelector(stateSelector);
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
        value={lastName}
        placeholder="Enter last name"
      />
    </StyledFormItem>
  );
}
