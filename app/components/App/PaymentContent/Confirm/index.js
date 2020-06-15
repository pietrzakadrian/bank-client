import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectSenderBill,
  makeSelectRecipientBill,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
} from 'containers/PaymentPage/selectors';
import { StyledCard } from 'components/App/Card/Card.style';
import { StyledConfirmWrapper, StyledLabel } from './Confirm.style';

const stateSelector = createStructuredSelector({
  senderBill: makeSelectSenderBill(),
  recipientBill: makeSelectRecipientBill(),
  amountMoney: makeSelectAmountMoney(),
  transferTitle: makeSelectTransferTitle(),
});

export default function Confirm() {
  const { senderBill, recipientBill, amountMoney, transferTitle } = useSelector(
    stateSelector,
  );

  return (
    <StyledConfirmWrapper>
      <StyledCard title="Wykonujesz przelew do:">
        <div>
          <StyledLabel>
            {recipientBill.user.firstName} {recipientBill.user.lastName}
          </StyledLabel>
        </div>
        <div>
          <StyledLabel>{recipientBill.accountBillNumber} </StyledLabel>
        </div>
        <div>
          Kwota:{' '}
          <StyledLabel>
            {amountMoney} {senderBill.currency.name}
          </StyledLabel>
        </div>
        <div>
          Tytuł przelewu: <StyledLabel>{transferTitle}</StyledLabel>
        </div>
      </StyledCard>
    </StyledConfirmWrapper>
  );
}
