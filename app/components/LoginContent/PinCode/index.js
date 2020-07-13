import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPinCode } from 'containers/LoginPage/selectors';
import { changeInputNumberAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem, StyledInputNumber } from 'components/Form/Form.style';
import messages from './messages';
import { disabledSpacesInput } from '../../../helpers';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
});

function PinCode({ intl }) {
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
        max={1e9}
        min="1"
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
};

export default injectIntl(PinCode);
