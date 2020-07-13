import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';

import { makeSelectPassword } from 'containers/LoginPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';
import { disabledSpacesInput, trimInput } from '../../../helpers';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

function Password({ intl }) {
  const { password } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangePassword = (event) => dispatch(changeInputAction(event.target));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="password"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <Input.Password
        onPaste={trimInput}
        onKeyPress={disabledSpacesInput}
        onChange={onChangePassword}
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
