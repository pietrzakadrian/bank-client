import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectPassword } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import { disabledSpacesInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  password: makeSelectPassword(),
});

function Password({ intl }) {
  const { password } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  const checkLengthOfCharactersInPassword = (_, value) => {
    if (value && value.length > 5) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(intl.formatMessage(messages.validation_valid)),
    );
  };

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="password"
      rules={[{ validator: checkLengthOfCharactersInPassword }]}
    >
      <Input.Password
        onKeyPress={disabledSpacesInput}
        onChange={(event) => onChangeInput(event)}
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
