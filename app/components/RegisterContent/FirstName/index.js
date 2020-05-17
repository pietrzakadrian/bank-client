import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectFirstName } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/RegisterPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  firstName: makeSelectFirstName(),
});

function FirstName({ intl }) {
  const { firstName } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [isStartedRegistration, setIsStartedRegistration] = useState(false);
  const isName = /^[a-z ,.'-]+$/i;

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !isName.test(value)) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validation_valid)),
      );
    }

    if (!value && isStartedRegistration) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validation_required)),
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
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="firstName"
        value={firstName}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

FirstName.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(FirstName);
