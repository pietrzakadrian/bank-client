import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';

import { makeSelectPassword } from 'containers/LoginPage/selectors';
import { changePasswordAction } from 'containers/LoginPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

function Password({ intl }) {
  const { password } = useSelector(stateSelector);
  const dispatch = useDispatch();

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="password"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <Input.Password
        onChange={(event) => dispatch(changePasswordAction(event.target.value))}
        name="password"
        value={password}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

Password.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Password);
