import React from 'react';
import { StyledFormItem } from 'components/Form/Form.style';
import { nameValidation, trimInput, disabledSpacesInput } from 'helpers';
import { Input } from 'antd';
import { changeInputAction } from 'containers/App/actions';
import { useDispatch } from 'react-redux';
import { intlShape, injectIntl } from 'react-intl';
import messages from './messages';

function LastName({ intl }) {
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
        onPaste={trimInput}
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
};

export default injectIntl(LastName);
