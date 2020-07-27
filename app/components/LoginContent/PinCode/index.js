import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPinCode } from 'containers/LoginPage/selectors';
import { changeInputNumberAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem, StyledInputNumber } from 'components/Form/styles';
import { disabledSpacesInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
});

function PinCode({ intl, onValidateFields }) {
  const { pinCode } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangePinCode = (name, value) =>
    dispatch(changeInputNumberAction({ name, value }));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="pinCode"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <StyledInputNumber
        max={10e5 - 1}
        min="1"
        onPressEnter={onValidateFields}
        type="number"
        onKeyPress={disabledSpacesInput}
        onChange={(value) => onChangePinCode('pinCode', value)}
        name="pinCode"
        value={pinCode}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

PinCode.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(PinCode);
