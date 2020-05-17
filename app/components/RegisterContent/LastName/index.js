import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectLastName } from 'containers/RegisterPage/selectors';
import { changeInputAction } from 'containers/RegisterPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  lastName: makeSelectLastName(),
});

function LastName({ intl }) {
  const { lastName } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const isName = /^[a-z ,.'-]+$/i;

  const checkStringConsistsLettersOnly = (_, value) => {
    if (value && !isName.test(value)) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validation_valid)),
      );
    }

    if (!value) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validation_required)),
      );
    }

    return Promise.resolve();
  };

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="lastName"
      rules={[{ validator: checkStringConsistsLettersOnly }]}
    >
      <Input
        onChange={(event) => dispatch(changeInputAction(event.target))}
        name="lastName"
        value={lastName}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

LastName.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(LastName);
