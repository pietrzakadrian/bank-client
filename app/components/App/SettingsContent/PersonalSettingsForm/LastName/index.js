import React from 'react';
import { StyledFormItem } from 'components/Form/styles';
import { nameValidation, disabledSpacesInput } from 'helpers';
import { Input } from 'antd';
import { changeInputAction } from 'containers/App/actions';
import { useDispatch } from 'react-redux';
import { intlShape, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';

function LastName({ intl, onValidateFields }) {
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !nameValidation(value)) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validationValid)),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      rules={[{ validator: checkStringConsistsLettersOnly }]}
      label={intl.formatMessage(messages.label)}
      name="lastName"
    >
      <Input
        onPressEnter={onValidateFields}
        onKeyPress={disabledSpacesInput}
        placeholder={intl.formatMessage(messages.placeholder)}
        onChange={(event) => onChangeInput(event)}
        name="lastName"
      />
    </StyledFormItem>
  );
}

LastName.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(LastName);
