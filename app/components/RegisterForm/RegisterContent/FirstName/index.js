import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectFirstName } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/RegisterPage/actions';
// import { FormattedMessage } from 'react-intl';
import { StyledFormItem } from '../../RegisterForm.style';
// import messages from './messages';

const stateSelector = createStructuredSelector({
  firstName: makeSelectFirstName(),
});

export default function FirstName() {
  const { firstName } = useSelector(stateSelector);
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
  }, [firstName]);

  return (
    <StyledFormItem
      label="First name"
      name="firstName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
    >
      <Input
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="firstName"
        value={firstName}
        placeholder="Enter first name"
      />
    </StyledFormItem>
  );
}
