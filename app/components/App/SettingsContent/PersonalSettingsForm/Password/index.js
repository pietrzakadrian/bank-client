import React from 'react';
import { StyledFormItem } from 'components/Form/styles';
import { useDispatch } from 'react-redux';
import { changeInputAction } from 'containers/App/actions';
import { Input } from 'antd';
import { injectIntl, intlShape } from 'react-intl';
import { disabledSpacesInput } from 'helpers';
import PropTypes from 'prop-types';
import messages from './messages';

function Password({ intl, onValidateFields }) {
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  const checkLengthOfCharactersInPassword = (_, value) => {
    if (!value || (value && value.length > 5)) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(intl.formatMessage(messages.validation_valid)),
    );
  };

  return (
    <StyledFormItem
      rules={[{ validator: checkLengthOfCharactersInPassword }]}
      tailed="true"
      label={intl.formatMessage(messages.label)}
      name="password"
    >
      <Input.Password
        onPressEnter={onValidateFields}
        onKeyPress={disabledSpacesInput}
        onChange={(event) => onChangeInput(event)}
        name="password"
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
