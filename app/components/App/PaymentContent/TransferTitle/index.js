import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Input } from 'antd';
import { makeSelectTransferTitle } from 'containers/PaymentPage/selectors';
import { changeInputAction } from 'containers/PaymentPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  transferTitle: makeSelectTransferTitle(),
});

function TransferTitle({ intl }) {
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
};

export default injectIntl(TransferTitle);
