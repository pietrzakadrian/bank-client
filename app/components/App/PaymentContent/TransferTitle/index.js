import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectTransferTitle } from 'containers/PaymentPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/styles';
import PropTypes from 'prop-types';
import messages from './messages';

const stateSelector = createStructuredSelector({
  transferTitle: makeSelectTransferTitle(),
});

function TransferTitle({ intl, onValidateFields }) {
  const { transferTitle } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeInput = (event) => dispatch(changeInputAction(event.target));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="transferTitle"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <Input
        onPressEnter={onValidateFields}
        onChange={(event) => onChangeInput(event)}
        name="transferTitle"
        value={transferTitle}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

TransferTitle.propTypes = {
  intl: intlShape.isRequired,
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(TransferTitle);
