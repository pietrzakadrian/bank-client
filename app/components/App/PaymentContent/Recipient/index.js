import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledFormItem } from 'components/Form/Form.style';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  makeSelectRecipients,
  makeSelectRecipientBill,
  makeSelectRecipientBillNumber,
} from 'containers/PaymentPage/selectors';
import {
  searchRecipientAction,
  changeInputAction,
} from 'containers/PaymentPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { AutoComplete } from 'antd';
import { getRequestName } from 'helpers';
import { SEARCH_RECIPIENT_REQUEST } from 'containers/PaymentPage/constants';
import messages from './messages';

const stateSelector = createStructuredSelector({
  recipients: makeSelectRecipients(),
  recipientBill: makeSelectRecipientBill(),
  recipientBillNumber: makeSelectRecipientBillNumber(),
  isLoading: makeSelectIsLoading(getRequestName(SEARCH_RECIPIENT_REQUEST)),
});

function Recipient({ intl }) {
  const { recipients } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeRecipientBill = (name, value) =>
    dispatch(changeInputAction({ name, value }));

  const onSearchRecipient = (value, reject, resolve) =>
    value && dispatch(searchRecipientAction(value, reject, resolve));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="recipientBill"
      rules={[
        {
          required: true,
          message: intl.formatMessage(messages.validation),
        },
      ]}
    >
      <AutoComplete
        onSearch={onSearchRecipient}
        onChange={(value) => onChangeRecipientBill('recipientBill', value)}
        placeholder={intl.formatMessage(messages.placeholder)}
      >
        {recipients.map((recipient) => (
          <AutoComplete.Option key={recipient.uuid} value={recipient.uuid}>
            <div>
              <div>
                {recipient.user.firstName} {recipient.user.lastName}
              </div>
              <div>{recipient.accountBillNumber}</div>
            </div>
          </AutoComplete.Option>
        ))}
      </AutoComplete>
    </StyledFormItem>
  );
}

Recipient.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Recipient);
