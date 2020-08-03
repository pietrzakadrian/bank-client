/**
 *
 * Notifications
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import { selectApp } from 'app/containers/App/selectors';
import {
  StyledList,
  StyledListItem,
  StyledListItemSender,
  StyledListItemAmount,
  StyledListItemDate,
  StyledListItemNoData,
  StyledItemWrapper,
} from 'app/components/App/List/styled';
import { useTranslation } from 'react-i18next';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { translations } from 'locales/i18n';
import { truncate } from 'utils/helpers';
import { format } from 'date-fns';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';

export function Notifications() {
  const isLoading = useSelector(selectLoading('global/getNotifications'));
  const { dateFormat } = useSelector(selectLanguage);
  const { notifications } = useSelector(selectApp);
  const { t } = useTranslation();

  return isLoading || (!isLoading && !notifications?.data?.length) ? (
    <StyledList>
      <StyledListItem hovered="false" readed="1">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <StyledListItemNoData>
            {t(
              translations.header.actions.notifications.actions.noNotifications,
            )}
          </StyledListItemNoData>
        )}
      </StyledListItem>
    </StyledList>
  ) : (
    <StyledList
      dataSource={notifications?.data}
      renderItem={notification => (
        <StyledListItem readed="1">
          <StyledItemWrapper>
            {t(
              translations.header.actions.notifications.actions.newNotification,
            )}{' '}
            <StyledListItemSender>
              {truncate(notification.senderBill.user.firstName, 50)}{' '}
              {truncate(notification.senderBill.user.lastName, 50)}
            </StyledListItemSender>{' '}
            {t(translations.header.actions.notifications.worth)}{' '}
            <StyledListItemAmount>
              {notification.amountMoney} {notification.senderBill.currency.name}
            </StyledListItemAmount>
            <StyledListItemDate>
              {format(new Date(notification.updatedAt), dateFormat)}
            </StyledListItemDate>
          </StyledItemWrapper>
        </StyledListItem>
      )}
    />
  );
}
