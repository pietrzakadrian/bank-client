/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRecentTransactions } from 'containers/DashboardPage/selectors';
import { makeSelectUser } from 'containers/App/selectors';
import { getRecentTransactionsAction } from 'containers/DashboardPage/actions';
import { StyledCard } from 'components/App/Card/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { format } from 'date-fns';
import { StyledTable, StyledTableWrapper } from 'components/App/Table/styles';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { GET_RECENT_TRANSACTIONS_REQUEST } from 'containers/DashboardPage/constants';
import { FormattedMessage } from 'react-intl';
import {
  StyledSenderAmountMoney,
  StyledUser,
  StyledTypography,
} from 'components/App/Transactions/styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
  recentTransactions: makeSelectRecentTransactions(),
  isLoading: makeSelectIsLoading(
    getRequestName(GET_RECENT_TRANSACTIONS_REQUEST),
  ),
});

export default function RecentTransactions() {
  const dispatch = useDispatch();
  const { recentTransactions, user, isLoading } = useSelector(stateSelector);

  const getRecentTransactions = () => dispatch(getRecentTransactionsAction());

  useEffect(() => {
    getRecentTransactions();
  }, []);

  const columns = [
    {
      render: ({ transferTitle, senderBill, recipientBill }) => (
        <>
          <div>
            {senderBill.user.uuid === user.uuid ? (
              <div>
                <StyledTypography>
                  <FormattedMessage {...messages.to} />{' '}
                </StyledTypography>
                <StyledUser>
                  {recipientBill.user.firstName} {recipientBill.user.lastName}
                </StyledUser>
              </div>
            ) : (
              <div>
                <StyledTypography>
                  <FormattedMessage {...messages.from} />{' '}
                </StyledTypography>
                <StyledUser>
                  {senderBill.user.firstName} {senderBill.user.lastName}
                </StyledUser>
              </div>
            )}
          </div>
          <div>{transferTitle}</div>
        </>
      ),
    },
    {
      render: ({ updatedAt, amountMoney, senderBill }) => (
        <div>
          <div>{format(new Date(updatedAt), 'dd.MM.yyyy')}</div>
          <div>
            {senderBill.user.uuid === user.uuid ? (
              <StyledSenderAmountMoney>
                -{amountMoney} {senderBill.currency.name}
              </StyledSenderAmountMoney>
            ) : (
              <>
                {amountMoney} {senderBill.currency.name}
              </>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <FormattedMessage {...messages.title}>
      {(title) => (
        <StyledCard loaded={isLoading ? 1 : 0} bordered title={title}>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <StyledTableWrapper onMouseDown={(e) => e.stopPropagation()}>
              <StyledTable
                minimaled="true"
                showHeader={false}
                pagination={false}
                dataSource={recentTransactions}
                columns={columns}
                rowKey={({ uuid }) => uuid}
              />
            </StyledTableWrapper>
          )}
        </StyledCard>
      )}
    </FormattedMessage>
  );
}
