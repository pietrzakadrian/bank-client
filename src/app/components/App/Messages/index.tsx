/**
 *
 * Messages
 *
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { truncate } from 'utils/helpers';
import { selectApp } from 'app/containers/App/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import {
  StyledListItem,
  StyledList,
  StyledListItemBottom,
  StyledListItemSender,
  StyledListItemNoData,
  StyledListItemSenderWrapper,
} from 'app/components/App/List/styled';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { StyledButton } from 'app/components/App/Button/styled';
import { StyledSubject, StyledItemWrapper } from './styled';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';

export function Messages() {
  const { messages, user } = useSelector(selectApp);
  const isLoading = useSelector(selectLoading('global/getMessages'));
  const { locale } = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return isLoading || (!isLoading && !messages?.data?.length) ? (
    <StyledList>
      <StyledListItem hovered="false" readed="1">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <StyledListItemNoData>
            {t(translations.header.actions.messages.actions.noMessages)}
          </StyledListItemNoData>
        )}
      </StyledListItem>
    </StyledList>
  ) : (
    <StyledList
      rowKey={({ uuid }) => uuid}
      header={
        <>
          <div>
            {t(translations.header.actions.messages.actions.newMessages)}{' '}
            {user?.userConfig?.messageCount}
          </div>

          <StyledButton disabled={!user?.userConfig?.messageCount} type="link">
            {t(translations.header.actions.messages.actions.readed)}
          </StyledButton>
        </>
      }
      dataSource={messages?.data}
      renderItem={({
        uuid,
        readed,
        templates,
        sender,
        recipient,
        createdAt,
      }) => (
        <StyledListItem
          key={uuid}
          readed={
            (recipient.uuid === user.uuid && readed) ||
            sender.uuid === user.uuid
              ? 1
              : 0
          }
        >
          <StyledItemWrapper>
            <StyledSubject
              dangerouslySetInnerHTML={{
                __html: truncate(
                  templates.find(template => template.language.code === locale)
                    ?.subject,
                ),
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html: truncate(
                  templates.find(template => template.language.code === locale)
                    ?.content,
                ),
              }}
            />

            <StyledListItemBottom>
              <StyledListItemSenderWrapper>
                {sender.uuid === user.uuid
                  ? t(translations.header.actions.messages.to)
                  : t(translations.header.actions.messages.from)}{' '}
                <StyledListItemSender>
                  {sender.firstName} {sender.lastName}
                </StyledListItemSender>
              </StyledListItemSenderWrapper>
              <div>{new Date(createdAt)}</div>
            </StyledListItemBottom>
          </StyledItemWrapper>
        </StyledListItem>
      )}
    />
  );
}
