import React from 'react';
import { createStructuredSelector } from 'reselect';
import { getRequestName, truncateString } from 'helpers';
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
import {
  StyledList,
  StyledListItem,
  StyledListItemSender,
  StyledListItemAmount,
  StyledListItemDate,
  StyledListItemNoData,
} from '../List/List.style';

const stateSelector = createStructuredSelector({
  notifications: makeSelectNotifications(),
  isLoading: makeSelectIsLoading(getRequestName(GET_NOTIFICATIONS_REQUEST)),
  locale: makeSelectLocale(),
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
});

export default function Notifications() {
  const { notifications, isLoading, dateFormat } = useSelector(stateSelector);

  return (
    <>
      {isLoading || (!isLoading && !notifications?.data?.length) ? (
        <StyledList>
          <StyledListItem hovered="false" readed="1">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <StyledListItemNoData>Brak powiadomień.</StyledListItemNoData>
            )}
          </StyledListItem>
        </StyledList>
      ) : (
        <StyledList
          dataSource={notifications.data}
          renderItem={(notification) => (
            <StyledListItem readed="1">
              <div style={{ width: '100%' }}>
                You have received a new transfer from{' '}
                <StyledListItemSender>
                  {truncateString(notification.senderBill.user.firstName, 50)}{' '}
                  {truncateString(notification.senderBill.user.lastName, 50)}
                </StyledListItemSender>{' '}
                worth{' '}
                <StyledListItemAmount>
                  {notification.amountMoney}{' '}
                  {notification.senderBill.currency.name}
                </StyledListItemAmount>
                <StyledListItemDate>
                  {format(new Date(notification.updatedAt), dateFormat)}
                </StyledListItemDate>
              </div>
            </StyledListItem>
          )}
        />
      )}
    </>
  );
}
