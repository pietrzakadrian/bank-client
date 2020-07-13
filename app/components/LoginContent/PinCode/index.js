import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectPinCode } from 'containers/LoginPage/selectors';
import {
  changeInputNumberAction,
  nextStepAction,
} from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem, StyledInputNumber } from 'components/Form/Form.style';
import { disabledSpacesInput, trimInput } from 'helpers';
import messages from './messages';

const stateSelector = createStructuredSelector({
  pinCode: makeSelectPinCode(),
});

function PinCode({ intl, form }) {
  const { pinCode } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangePinCode = (name, value) =>
    dispatch(changeInputNumberAction({ name, value }));
  const onNextStep = () => dispatch(nextStepAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields();
      onNextStep();
    } catch (err) {
      Error(err);
    }
  };

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
        type="number"
        onPaste={trimInput}
        onPressEnter={onValidateFields}
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
  form: PropTypes.object.isRequired,
};

export default injectIntl(PinCode);
