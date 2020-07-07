import React from 'react';
import { createStructuredSelector } from 'reselect';
import { getRequestName } from 'helpers';
import { format } from 'date-fns';
import {
  makeSelectLocale,
  makeSelectDateFormat,
} from 'providers/LanguageProvider/selectors';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  makeSelectNotifications,
  makeSelectUser,
} from 'containers/App/selectors';
import { GET_NOTIFICATIONS_REQUEST } from 'containers/App/constants';
import { useSelector } from 'react-redux';
import LoadingIndicator from 'components/LoadingIndicator';
import { StyledList, StyledListItem } from '../List/List.style';

const stateSelector = createStructuredSelector({
  notifications: makeSelectNotifications(),
  isLoading: makeSelectIsLoading(getRequestName(GET_NOTIFICATIONS_REQUEST)),
  locale: makeSelectLocale(),
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
});

export default function Notifications() {
  const {
    notifications: { data },
    isLoading,
    dateFormat,
  } = useSelector(stateSelector);

  return (
    <>
      {isLoading || (!isLoading && !data?.length) ? (
        <StyledList>
          <StyledListItem readed="1">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <div style={{ margin: 'auto' }}>Brak powiadomień.</div>
            )}
          </StyledListItem>
        </StyledList>
      ) : (
        <StyledList
          dataSource={data}
          renderItem={(notification) => (
            <StyledListItem>
              <div>
                You have received a new transfer from{' '}
                {notification.senderBill.user.firstName}{' '}
                {notification.senderBill.user.lastName} worth{' '}
                {notification.amountMoney}{' '}
                {notification.senderBill.currency.name}
                <div>
                  {format(new Date(notification.updatedAt), dateFormat)}
                </div>
              </div>
            </StyledListItem>
          )}
        />
      )}
    </>
  );
}
