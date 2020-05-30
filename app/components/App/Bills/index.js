import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectBills,
  makeSelectCurrencies,
  makeSelectCurrency,
} from 'containers/DashboardPage/selectors';
import {
  getBillsAction,
  toggleModalAction,
} from 'containers/DashboardPage/actions';
import { makeSelectIsCollapsedSidebar } from 'containers/App/selectors';
import { StyledCard } from 'components/App/Card/Card.style';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  StyledTable,
  StyledTableWrapper,
} from 'components/App/Table/Table.style';
import { PlusCircleOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import Modal from 'components/App/Modal';

import { StyledBillAmountMoney } from './Bills.style';
import { StyledButton, StyledButtonContent } from '../Button/Button.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  bills: makeSelectBills(),
  currencies: makeSelectCurrencies(),
  currency: makeSelectCurrency(),
  isCollapsedSidebar: makeSelectIsCollapsedSidebar(),
});

const columns = [
  {
    dataIndex: 'accountBillNumber',
    render: (text) => <div>{text}</div>,
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

export default function Bills() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const { bills } = useSelector(stateSelector);

  const getBills = () => dispatch(getBillsAction());
  const toggleModal = () => dispatch(toggleModalAction());

  useEffect(() => {
    if (!bills.length) {
      getBills();
    }

    if (bills.length) {
      setIsLoading(false);
    }
  }, [JSON.stringify(bills)]);

  return (
    <>
      <StyledCard
        darker="true"
        loaded={isLoading ? 1 : 0}
        bordered={false}
        shadowed="true"
        title="Bills"
        extra={
          <StyledButton type="link" onClick={toggleModal}>
            <StyledButtonContent onMouseDown={(e) => e.stopPropagation()}>
              <PlusCircleOutlined /> <FormattedMessage {...messages.action} />
            </StyledButtonContent>
          </StyledButton>
        }
      >
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <StyledTableWrapper onMouseDown={(e) => e.stopPropagation()}>
            <StyledTable
              showHeader={false}
              pagination={false}
              dataSource={bills}
              columns={columns}
              rowKey={(record) => record.uuid}
            />
          </StyledTableWrapper>
        )}
      </StyledCard>

      <Modal />
    </>
  );
}
