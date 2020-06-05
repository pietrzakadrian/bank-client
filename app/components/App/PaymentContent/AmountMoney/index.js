import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectBills,
  makeSelectAmountMoney,
  makeSelectSenderBill,
} from 'containers/PaymentPage/selectors';
import { changeInputNumberAction } from 'containers/PaymentPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { StyledFormItem, StyledInputNumber } from 'components/Form/Form.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  amountMoney: makeSelectAmountMoney(),
  bills: makeSelectBills(),
  senderBill: makeSelectSenderBill(),
});

function AmountMoney({ intl }) {
  const { amountMoney, bills, senderBill } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const selectedBill = bills.find((bill) => bill.uuid === senderBill);

  const onChangeAmountMoney = (name, value) =>
    dispatch(changeInputNumberAction({ name, value }));

  // eslint-disable-next-line consistent-return
  const checkCorrectAmountMoney = (_, value) => {
    if (value && value > Number(selectedBill.amountMoney)) {
      return Promise.reject(new Error(`You don't have that amount of money.`));
    }

    if (value === 0 || value < 0) {
      return Promise.reject(
        new Error(`You cannot transfer an amount less than or equal to 0.`),
      );
    }

    Promise.resolve();
  };

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="amountMoney"
      rules={[
        {
          required: true,
          message: intl.formatMessage(messages.validation),
        },
        { validator: checkCorrectAmountMoney },
      ]}
    >
      <StyledInputNumber
        type="number"
        onChange={(value) => onChangeAmountMoney('amountMoney', value)}
        name="amountMoney"
        value={amountMoney}
        placeholder={intl.formatMessage(messages.placeholder)}
      />
    </StyledFormItem>
  );
}

AmountMoney.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(AmountMoney);
