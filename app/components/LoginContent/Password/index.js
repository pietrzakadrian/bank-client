import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import PropTypes from 'prop-types';
import { makeSelectPassword } from 'containers/LoginPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/styles';
import { disabledSpacesInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

function Password({ intl, onValidateFields }) {
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
        onPressEnter={onValidateFields}
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
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(Password);
