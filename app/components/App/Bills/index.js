import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectBills } from 'containers/DashboardPage/selectors';
import { getBillsAction } from 'containers/DashboardPage/actions';
import { StyledCard } from 'components/App/Card/styles';
import LoadingIndicator from 'components/LoadingIndicator';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { StyledTable, StyledTableWrapper } from 'components/App/Table/styles';
import { PlusCircleOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import Modal from 'components/App/Bills/Modal';
import { toggleModalAction } from 'containers/App/actions';
import { getRequestName } from 'helpers';
import { GET_BILLS_REQUEST } from 'containers/DashboardPage/constants';
import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/styles';
import { StyledTag } from 'components/App/Tag/styles';
import { StyledBillAmountMoney } from './styles';
import messages from './messages';

const stateSelector = createStructuredSelector({
  bills: makeSelectBills(),
  isLoading: makeSelectIsLoading(getRequestName(GET_BILLS_REQUEST)),
});

const columns = [
  {
    dataIndex: 'accountBillNumber',
    render: (text) => (
      <div>
        {text}{' '}
        <StyledTag color="blue" key={text.uuid}>
          <FormattedMessage {...messages.personal} />
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

export default function Bills() {
  const dispatch = useDispatch();
  const { bills, isLoading } = useSelector(stateSelector);

  const getBills = () => dispatch(getBillsAction());
  const toggleModal = () => dispatch(toggleModalAction());

  useEffect(() => {
    if (!bills.length) {
      getBills();
    }
  }, []);

  return (
    <>
      <FormattedMessage {...messages.title}>
        {(title) => (
          <StyledCard
            darker="true"
            loaded={isLoading ? 1 : 0}
            bordered={false}
            shadowed="true"
            title={title}
            extra={
              <StyledButton type="link" onClick={toggleModal}>
                <StyledButtonContent onMouseDown={(e) => e.stopPropagation()}>
                  <PlusCircleOutlined />{' '}
                  <FormattedMessage {...messages.action} />
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
                  rowKey={({ uuid }) => uuid}
                />
              </StyledTableWrapper>
            )}
          </StyledCard>
        )}
      </FormattedMessage>

      <Modal />
    </>
  );
}
