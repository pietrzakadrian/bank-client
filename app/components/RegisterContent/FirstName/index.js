import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectFirstName } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/styles';
import { nameValidation, disabledSpacesInput } from 'helpers';
import PropTypes from 'prop-types';
import messages from './messages';

const stateSelector = createStructuredSelector({
  firstName: makeSelectFirstName(),
});

function FirstName({ intl, onValidateFields }) {
  const { firstName } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isStartedRegistration, setIsStartedRegistration] = useState(false);

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !nameValidation(value)) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validationValid)),
      );
    }

    if (!value && isStartedRegistration) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validationRequired)),
      );
    }

    return Promise.resolve();
  };

  useEffect(() => {
    setIsStartedRegistration(true);
  }, [firstName]);

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="firstName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
    >
      <Input
        onPressEnter={onValidateFields}
        onKeyPress={disabledSpacesInput}
        onChange={(event) => onChangeInput(event)}
        name="firstName"
        value={firstName}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

FirstName.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(FirstName);
