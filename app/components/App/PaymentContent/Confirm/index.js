import React from 'react';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import {
  makeSelectSenderBill,
  makeSelectRecipientBill,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
} from 'containers/PaymentPage/selectors';
import { StyledCard } from 'components/App/Card/styles';
import { FormattedMessage } from 'react-intl';
import { StyledConfirmWrapper, StyledLabel } from './styles';
import messages from './messages';

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
      <FormattedMessage {...messages.details}>
        {(title) => (
          <StyledCard title={title}>
            <div>
              <StyledLabel>
                {recipientBill.user.firstName} {recipientBill.user.lastName}
              </StyledLabel>
            </div>
            <div>
              <StyledLabel>{recipientBill.accountBillNumber} </StyledLabel>
            </div>
            <div>
              <FormattedMessage {...messages.amount} />{' '}
              <StyledLabel>
                {amountMoney.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}{' '}
                {senderBill.currency.name}
              </StyledLabel>
            </div>
            <div>
              <FormattedMessage {...messages.title} />{' '}
              <StyledLabel>{transferTitle}</StyledLabel>
            </div>
          </StyledCard>
        )}
      </FormattedMessage>
    </StyledConfirmWrapper>
  );
}
