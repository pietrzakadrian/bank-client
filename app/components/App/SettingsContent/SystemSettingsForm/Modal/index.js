import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import { StyledModal } from 'components/App/Modal/styles';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setUserDataAction } from 'containers/SettingsPage/actions';
import { SET_USER_DATA_REQUEST } from 'containers/SettingsPage/constants';
import { getRequestName } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { toggleModalAction } from 'containers/App/actions';
import { makeSelectCurrencies } from 'containers/App/selectors';
import {
  makeSelectIsOpenedModal,
  makeSelectNewData,
} from 'containers/SettingsPage/selectors';
import messages from '../messages';

const stateSelector = createStructuredSelector({
  currencies: makeSelectCurrencies(),
  newData: makeSelectNewData(),
  isOpenedModal: makeSelectIsOpenedModal(),
  isLoading: makeSelectIsLoading([getRequestName(SET_USER_DATA_REQUEST)]),
});

export default function Modal({ snippets, form }) {
  const dispatch = useDispatch();
  const { isLoading, isOpenedModal, currencies, newData } = useSelector(
    stateSelector,
  );

  const onToggleModal = () => {
    form.resetFields();
    dispatch(toggleModalAction());
  };
  const onSetUserData = () => dispatch(setUserDataAction(snippets));

  return (
    <FormattedMessage {...messages.title}>
      {(title) => (
        <StyledModal
          centered="true"
          title={title}
          visible={isOpenedModal}
          onOk={onSetUserData}
          onCancel={onToggleModal}
          footer={[
            <Button key="back" onClick={onToggleModal}>
              <FormattedMessage {...messages.cancel} />
            </Button>,
            <Button
              key="submit"
              disabled={isLoading}
              type="primary"
              onClick={onSetUserData}
            >
              {isLoading ? (
                <LoadingIndicator />
              ) : (
                <FormattedMessage {...messages.confirm} />
              )}
            </Button>,
          ]}
        >
          <p>
            <FormattedMessage
              {...messages.tryingChangeDefaultCurrencyPartOne}
            />{' '}
            <strong>
              {
                currencies?.find(
                  (currency) => currency?.uuid === newData?.currency,
                )?.name
              }
            </strong>
            <FormattedMessage
              {...messages.tryingChangeDefaultCurrencyPartTwo}
            />
          </p>
          <p>
            <FormattedMessage
              {...messages.tryingChangeDefaultCurrencyConfirm}
            />
          </p>
        </StyledModal>
      )}
    </FormattedMessage>
  );
}

Modal.propTypes = {
  snippets: PropTypes.shape({
    success: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  }).isRequired,
  form: PropTypes.object.isRequired,
};
