import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { makeSelectPassword } from 'containers/LoginPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import { loginAction } from 'containers/LoginPage/actions';
import { disabledSpacesInput, trimInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

function Password({ intl, form }) {
  const { password } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangePassword = (event) => dispatch(changeInputAction(event.target));
  const onLogin = () => dispatch(loginAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();
      onLogin();
    } catch (err) {
      Error(err);
    }
  };

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
        onPressEnter={onValidateFields}
        name="password"
        value={password}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

Password.propTypes = {
  intl: intlShape.isRequired,
  form: PropTypes.object.isRequired,
};

export default injectIntl(Password);
