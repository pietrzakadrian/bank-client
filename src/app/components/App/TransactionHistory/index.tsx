/**
 *
 * TransactionHistory
 *
 */
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { selectApp } from 'app/containers/App/selectors';
import { selectHistoryPage } from 'app/containers/HistoryPage/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import {
  StyledSenderAmountMoney,
  StyledUser,
  StyledTable,
} from 'app/components/App/Transactions/styled';
import { translations } from 'locales/i18n';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { actions } from 'app/containers/HistoryPage/slice';
import { truncate } from 'utils/helpers';
import { format } from 'date-fns';
import { StyledTag } from './styled';
import { FilePdfOutlined } from '@ant-design/icons';

export function TransactionHistory() {
  const dispatch = useDispatch();
  const { dateFormat } = useSelector(selectLanguage);
  const { user } = useSelector(selectApp);
  const { transactions } = useSelector(selectHistoryPage);
  const isLoading = useSelector(
    selectLoading('historyPage/getTransactionHistory'),
  );
  const { t } = useTranslation();

  const onGetTransactionHistory = (currentPage: number = 1) =>
    dispatch(actions.getTransactionHistoryRequestAction({ currentPage }));
  const onGetConfirmationFile = (uuid: string) =>
    dispatch(actions.getConfirmationFileRequestAction({ uuid }));

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, [transactions.data?.length]);
  };

  useEffectOnMount(() => {
    onGetTransactionHistory();
  });

  const tableLoading = {
    spinning: isLoading,
    indicator: <LoadingIndicator />,
  };
  const pagination = {
    current: transactions?.meta?.page,
    pageSize: transactions?.meta?.take,
    total: transactions?.meta?.itemCount,
  };

  const columns = [
    {
      title: t(translations.recentTransactions.sender),
      render: ({ senderBill }) => (
        <div>
          <StyledUser>
            {truncate(
              `${senderBill.user.firstName} ${senderBill.user.lastName}`,
              20,
            )}
          </StyledUser>
          <div>{senderBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: t(translations.recentTransactions.recipient),
      render: ({ recipientBill }) => (
        <div>
          <StyledUser>
            {truncate(
              `${recipientBill.user.firstName} ${recipientBill.user.lastName}`,
              20,
            )}
          </StyledUser>
          <div>{recipientBill.accountBillNumber}</div>
        </div>
      ),
    },
    {
      title: t(translations.recentTransactions.amountMoney),
      render: ({ amountMoney, senderBill }) => (
        <div>
          {senderBill.user.uuid === user?.uuid ? (
            <StyledSenderAmountMoney>
              -{amountMoney} {senderBill.currency.name}
            </StyledSenderAmountMoney>
          ) : (
            <>
              {amountMoney} {senderBill.currency.name}
            </>
          )}
        </div>
      ),
    },
    {
      title: t(translations.recentTransactions.transferTitle),
      render: ({ transferTitle }) => <div>{transferTitle}</div>,
    },
    {
      title: t(translations.recentTransactions.date),
      render: ({ updatedAt }) => (
        <div>{format(new Date(updatedAt), dateFormat)}</div>
      ),
    },
    {
      title: t(translations.recentTransactions.confirmation),
      render: ({ uuid }) => (
        <StyledTag
          onClick={() => onGetConfirmationFile(uuid)}
          color="blue"
          key={uuid}
        >
          <FilePdfOutlined />{' '}
          <span>{t(translations.recentTransactions.downloadPdf)}</span>
        </StyledTag>
      ),
    },
  ];

  return (
    <StyledTable
      sender={t(translations.recentTransactions.sender)}
      recipient={t(translations.recentTransactions.recipient)}
      amountMoney={t(translations.recentTransactions.amountMoney)}
      transferTitle={t(translations.recentTransactions.transferTitle)}
      date={t(translations.recentTransactions.date)}
      confirmation={t(translations.recentTransactions.confirmation)}
      rowKey={({ uuid }) => uuid}
      loading={tableLoading}
      dataSource={transactions?.data}
      columns={columns}
      pagination={pagination}
      onChange={({ current }) => onGetTransactionHistory(current)}
    />
  );
}
