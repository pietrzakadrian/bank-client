/**
 *
 * Bills
 *
 */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/containers/DashboardPage/slice';
import { selectDashboardPage } from 'app/containers/DashboardPage/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { useTranslation } from 'react-i18next';
import { StyledCard } from '../Card/styled';
import { translations } from 'locales/i18n';
import {
  StyledButton,
  StyledButtonContent,
} from 'app/components/App/Button/styled';
import { PlusCircleOutlined } from '@ant-design/icons';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { StyledTableWrapper, StyledTable } from '../Table/styled';
import { StyledTag } from '../Tag/styled';
import { StyledBillAmountMoney } from './styled';

export function Bills() {
  const dispatch = useDispatch();
  const { bills } = useSelector(selectDashboardPage);
  const isLoading = useSelector(selectLoading('dashboardPage/getBills'));
  const { t } = useTranslation();

  const getBills = () => dispatch(actions.getBillsRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    getBills();
  });

  const columns = [
    {
      dataIndex: 'accountBillNumber',
      render: text => (
        <div>
          {text}{' '}
          <StyledTag color="blue" key={text.uuid}>
            {t(translations.bills.personal)}
          </StyledTag>
        </div>
      ),
    },
    {
      dataIndex: 'amountMoney',
      render: (text, { currency }) => (
        <>
          <StyledBillAmountMoney>{text}</StyledBillAmountMoney> {currency.name}
        </>
      ),
    },
  ];

  return (
    <StyledCard
      darked="true"
      loaded={isLoading ? 1 : 0}
      bordered={false}
      shadowed="true"
      title={t(translations.bills.title)}
      extra={
        <StyledButton type="link">
          <StyledButtonContent onMouseDown={e => e.stopPropagation()}>
            <PlusCircleOutlined /> <span>{t(translations.bills.action)}</span>
          </StyledButtonContent>
        </StyledButton>
      }
    >
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <StyledTableWrapper onMouseDown={e => e.stopPropagation()}>
          <StyledTable
            showHeader={false}
            pagination={false}
            dataSource={bills}
            columns={columns}
            rowKey={({ uuid }) => uuid}
          />
        </StyledTableWrapper>
      )}
    </StyledCard>
  );
}
