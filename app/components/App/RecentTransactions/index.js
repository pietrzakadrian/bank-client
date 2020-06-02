/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectRecentTransactions } from 'containers/DashboardPage/selectors';
import { makeSelectUser } from 'containers/App/selectors';
import { getRecentTransactionsAction } from 'containers/DashboardPage/actions';
import { StyledCard } from 'components/App/Card/Card.style';
import LoadingIndicator from 'components/LoadingIndicator';
import { format } from 'date-fns';
import {
  StyledTable,
  StyledTableWrapper,
} from 'components/App/Table/Table.style';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { GET_RECENT_TRANSACTIONS_REQUEST } from 'containers/DashboardPage/constants';
import {
  StyledSenderAmountMoney,
  StyledUser,
} from './RecentTransactions.style';

const dateFormat = `dd.MM.yyyy`;
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
    if (!recentTransactions.length) getRecentTransactions();
  }, []);

  const columns = [
    {
      render: ({ transferTitle, senderAccountBill, recipientAccountBill }) => (
        <>
          <div>
            {senderAccountBill.user.uuid === user.uuid ? (
              <div>
                <div style={{ display: 'inline' }}>to </div>
                <StyledUser>
                  {recipientAccountBill.user.firstName}{' '}
                  {recipientAccountBill.user.lastName}
                </StyledUser>
              </div>
            ) : (
              <div>
                <div style={{ display: 'inline' }}>from </div>
                <StyledUser>
                  {senderAccountBill.user.firstName}{' '}
                  {senderAccountBill.user.lastName}
                </StyledUser>
              </div>
            )}
          </div>
          <div>{transferTitle}</div>
        </>
      ),
    },
    {
      render: ({ updatedAt, amountMoney, senderAccountBill }) => (
        <div>
          <div>{format(new Date(updatedAt), dateFormat)}</div>
          <div>
            {senderAccountBill.user.uuid === user.uuid ? (
              <StyledSenderAmountMoney>
                -{amountMoney} {senderAccountBill.currency.name}
              </StyledSenderAmountMoney>
            ) : (
              <>
                {amountMoney} {senderAccountBill.currency.name}
              </>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <StyledCard loaded={isLoading ? 1 : 0} bordered title="Recent Transactions">
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
            rowKey={(record) => record.uuid}
          />
        </StyledTableWrapper>
      )}
    </StyledCard>
  );
}
