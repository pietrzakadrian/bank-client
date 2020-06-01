import React from 'react';

import { Select, Button, Form } from 'antd';
import { StyledForm, StyledFormItem } from 'components/Form/Form.style';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCurrencies,
  makeSelectIsOpenedModal,
} from 'containers/DashboardPage/selectors';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCurrenciesAction,
  selectCurrencyAction,
  createNewBillAction,
  toggleModalAction,
} from 'containers/DashboardPage/actions';
import LoadingIndicator from 'components/LoadingIndicator';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { getRequestName } from 'helpers';
import { CREATE_NEW_BILL_REQUEST } from 'containers/DashboardPage/constants';
import { StyledModal } from './Modal.style';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading(getRequestName(CREATE_NEW_BILL_REQUEST)),
});

export default function Modal() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { currencies, isOpenedModal, isLoading } = useSelector(stateSelector);

  const toggleModal = () => dispatch(toggleModalAction());
  const getCurrencies = () => dispatch(getCurrenciesAction());
  const createNewBill = () => dispatch(createNewBillAction());

  const onValidateFields = async () => {
    try {
      await form.validateFields(['currency']);
      createNewBill();
      toggleModal();
      form.resetFields();
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <StyledModal
      title="Create a new bill"
      visible={isOpenedModal}
      onOk={onValidateFields}
      onCancel={toggleModal}
      centered
      confirmLoading={isLoading}
      footer={[
        <Button key="back" onClick={toggleModal}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onValidateFields}>
          Create
        </Button>,
      ]}
    >
      <>
        <p>
          You are currently trying to create a new bill. Creating a new bill is
          free.
        </p>

        <StyledForm form={form} name="create-new-bill">
          <StyledFormItem
            tailed="true"
            name="currency"
            rules={[
              {
                required: true,
                message: 'Currency is required.',
              },
            ]}
          >
            <Select
              onClick={() => !currencies.length && getCurrencies()}
              notFoundContent={isLoading ? <LoadingIndicator /> : null}
              onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
              placeholder="Select currency"
            >
              {currencies.map((currency) => (
                <Select.Option key={currency.uuid} value={currency.uuid}>
                  {currency.name}
                </Select.Option>
              ))}
            </Select>
          </StyledFormItem>
        </StyledForm>

        <p>Remember that the number of bills you have is limited.</p>
      </>
    </StyledModal>
  );
}
