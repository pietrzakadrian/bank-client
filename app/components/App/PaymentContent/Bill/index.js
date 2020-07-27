import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Select } from 'antd';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { makeSelectBills } from 'containers/PaymentPage/selectors';
import {
  getBillsAction,
  selectSenderBillAction,
} from 'containers/PaymentPage/actions';

import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem } from 'components/Form/styles';
import { getRequestName } from 'helpers';
import { GET_BILLS_REQUEST } from 'containers/PaymentPage/constants';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from './messages';

const stateSelector = createStructuredSelector({
  bills: makeSelectBills(),
  isLoading: makeSelectIsLoading(getRequestName(GET_BILLS_REQUEST)),
});

function Bill({ intl }) {
  const { sender, bills, isLoading } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onGetBills = () => !bills.length && dispatch(getBillsAction());
  const onSelectSenderBill = (bill) => dispatch(selectSenderBillAction(bill));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="senderBill"
      rules={[
        {
          required: true,
          message: intl.formatMessage(messages.validation),
        },
      ]}
    >
      <Select
        onClick={onGetBills}
        notFoundContent={isLoading ? <LoadingIndicator /> : null}
        onSelect={(bill) => onSelectSenderBill(bill)}
        placeholder={intl.formatMessage(messages.placeholder)}
        value={sender}
      >
        {bills.map((bill) => (
          <Select.Option key={bill.uuid} value={bill.uuid}>
            <div>{bill.accountBillNumber}</div>
            <div>
              {bill.amountMoney} {bill.currency.name}
            </div>
          </Select.Option>
        ))}
      </Select>
    </StyledFormItem>
  );
}

Bill.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Bill);
