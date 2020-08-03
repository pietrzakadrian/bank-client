/**
 *
 * RecentTransactions
 *
 */
import React, { useEffect } from 'react';
import { StyledCard } from '../Card/styled';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { useSelector, useDispatch } from 'react-redux';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { StyledTableWrapper, StyledTable } from '../Table/styled';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { selectApp } from 'app/containers/App/selectors';
import { selectDashboardPage } from 'app/containers/DashboardPage/selectors';
import { actions } from 'app/containers/DashboardPage/slice';
import {
  StyledTypography,
  StyledUser,
  StyledSenderAmountMoney,
} from '../Transactions/styled';
import { format } from 'date-fns';

export function RecentTransactions() {
  const { t } = useTranslation();
  const isLoading = useSelector(
    selectLoading('dashboardPage/getRecentTransactions'),
  );
  const { user } = useSelector(selectApp);
  const dispatch = useDispatch();
  const { recentTransactions } = useSelector(selectDashboardPage);

  const getRecentTransactions = () =>
    dispatch(actions.getRecentTransactionsRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    getRecentTransactions();
  });

  const columns = [
    {
      render: ({ transferTitle, senderBill, recipientBill }) => (
        <>
          <div>
            {senderBill.user.uuid === user.uuid ? (
              <div>
                <StyledTypography>
                  {t(translations.recentTransactions.to)}{' '}
                </StyledTypography>
                <StyledUser>
                  {recipientBill.user.firstName} {recipientBill.user.lastName}
                </StyledUser>
              </div>
            ) : (
              <div>
                <StyledTypography>
                  {t(translations.recentTransactions.from)}{' '}
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
    <StyledCard
      loaded={isLoading ? 1 : 0}
      bordered
      title={t(translations.recentTransactions.title)}
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledTableWrapper onMouseDown={e => e.stopPropagation()}>
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
  );
}
