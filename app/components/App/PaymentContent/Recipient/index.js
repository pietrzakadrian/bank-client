import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { StyledFormItem } from 'components/Form/styles';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { makeSelectRecipients } from 'containers/PaymentPage/selectors';
import { changeInputAction } from 'containers/App/actions';
import { searchRecipientAction } from 'containers/PaymentPage/actions';
import { intlShape, injectIntl, FormattedMessage } from 'react-intl';
import { AutoComplete, Tooltip, Input } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { getRequestName, disabledSpacesInput, numberValidation } from 'helpers';
import { SEARCH_RECIPIENT_REQUEST } from 'containers/PaymentPage/constants';
import PropTypes from 'prop-types';
import messages from './messages';

const stateSelector = createStructuredSelector({
  recipients: makeSelectRecipients(),
  isLoading: makeSelectIsLoading(getRequestName(SEARCH_RECIPIENT_REQUEST)),
});

function Recipient({ intl, onValidateFields }) {
  const { recipients } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onChangeRecipientAccountBill = (name, value) =>
    dispatch(changeInputAction({ name, value }));
  const onSearchRecipient = (value) =>
    value && dispatch(searchRecipientAction(value));

  const checkStringConsistsNumbersOnly = (_, value) => {
    if (value && !numberValidation(value)) {
      return Promise.reject(
        new Error(intl.formatMessage(messages.validationNumber)),
      );
    }

    if (!value) {
      return Promise.reject(new Error(intl.formatMessage(messages.validation)));
    }

    return Promise.resolve();
  };

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
      rules={[{ validator: checkStringConsistsNumbersOnly }]}
    >
      <AutoComplete
        onSearch={onSearchRecipient}
        onChange={(value) =>
          onChangeRecipientAccountBill('recipientAccountBillNumber', value)
        }
        options={options}
        notFoundContent={
          <div>
            <FormattedMessage {...messages.notFoundContent} />
          </div>
        }
      >
        <Input
          onPressEnter={onValidateFields}
          onKeyPress={disabledSpacesInput}
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
  onValidateFields: PropTypes.func.isRequired,
};

export default injectIntl(Recipient);
