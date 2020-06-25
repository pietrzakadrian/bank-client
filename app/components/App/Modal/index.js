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
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { StyledModal } from './Modal.style';
import messages from './messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading(getRequestName(CREATE_NEW_BILL_REQUEST)),
});

function Modal({ intl }) {
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
      Error(error);
    }
  };

  return (
    <StyledModal
      title={intl.formatMessage(messages.title)}
      visible={isOpenedModal}
      onOk={onValidateFields}
      onCancel={toggleModal}
      centered
      footer={[
        <Button key="back" onClick={toggleModal}>
          <FormattedMessage {...messages.cancel} />
        </Button>,
        <Button
          key="submit"
          disabled={isLoading}
          type="primary"
          onClick={onValidateFields}
        >
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <FormattedMessage {...messages.create} />
          )}
        </Button>,
      ]}
    >
      <>
        <p>
          <FormattedMessage {...messages.descriptionTop} />
        </p>

        <StyledForm form={form} name="create-new-bill">
          <StyledFormItem
            tailed="true"
            name="currency"
            rules={[
              {
                required: true,
                message: intl.formatMessage(messages.currencyRequired),
              },
            ]}
          >
            <Select
              onClick={() => !currencies.length && getCurrencies()}
              notFoundContent={isLoading ? <LoadingIndicator /> : null}
              onSelect={(currency) => dispatch(selectCurrencyAction(currency))}
              placeholder={intl.formatMessage(messages.placeholder)}
            >
              {currencies.map((currency) => (
                <Select.Option key={currency.uuid} value={currency.uuid}>
                  {currency.name}
                </Select.Option>
              ))}
            </Select>
          </StyledFormItem>
        </StyledForm>

        <p>
          <FormattedMessage {...messages.descriptionBottom} />
        </p>
      </>
    </StyledModal>
  );
}

Modal.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Modal);
