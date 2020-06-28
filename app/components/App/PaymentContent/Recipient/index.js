import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledFormItem } from 'components/Form/Form.style';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { makeSelectRecipients } from 'containers/PaymentPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { searchRecipientAction } from 'containers/PaymentPage/actions';
import { intlShape, injectIntl } from 'react-intl';
import { AutoComplete, Tooltip, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { getRequestName } from 'helpers';
import { SEARCH_RECIPIENT_REQUEST } from 'containers/PaymentPage/constants';
import messages from './messages';

const stateSelector = createStructuredSelector({
  recipients: makeSelectRecipients(),
  isLoading: makeSelectIsLoading(getRequestName(SEARCH_RECIPIENT_REQUEST)),
});

function Recipient({ intl }) {
  const { recipients } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeRecipientAccountBill = (name, value) =>
    dispatch(changeInputAction({ name, value }));
  const onSearchRecipient = (value) =>
    value && dispatch(searchRecipientAction(value));

  const options = recipients.map((recipient) => ({
    label: (
      <>
        <div>
          {recipient.user.firstName} {recipient.user.lastName}
        </div>
        <div>{recipient.accountBillNumber}</div>
      </>
    ),
    value: recipient.accountBillNumber.replace(/ /g, ''),
  }));

  return (
    <StyledFormItem
      label={intl.formatMessage(messages.label)}
      name="recipientBill"
      rules={[
        { required: true, message: intl.formatMessage(messages.validation) },
      ]}
    >
      <AutoComplete
        onSearch={onSearchRecipient}
        onChange={(value) =>
          onChangeRecipientAccountBill('recipientAccountBillNumber', value)
        }
        options={options}
      >
        <Input
          maxLength="26"
          placeholder={intl.formatMessage(messages.placeholder)}
          suffix={
            <Tooltip title={intl.formatMessage(messages.tooltip)}>
              <QuestionCircleOutlined />
            </Tooltip>
          }
        />
      </AutoComplete>
    </StyledFormItem>
  );
}

Recipient.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Recipient);
