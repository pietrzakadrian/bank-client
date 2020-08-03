/**
 *
 * Messages
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { truncate } from 'utils/helpers';
import { selectApp } from 'app/containers/App/selectors';
import { selectLoading } from 'app/providers/LoadingProvider/selectors';
import {
  StyledListItem,
  StyledList,
  StyledListItemBottom,
  StyledListItemSender,
  StyledListItemNoData,
  StyledItemWrapper,
  StyledListItemSenderWrapper,
} from 'app/components/App/List/styled';
import LoadingIndicator from 'app/components/LoadingIndicator';
import { useTranslation } from 'react-i18next';
import { translations } from 'locales/i18n';
import { StyledButton } from 'app/components/App/Button/styled';
import { StyledSubject } from './styled';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { format } from 'date-fns';
import { Modal } from './Modal';
import { actions } from 'app/containers/App/slice';

export function Messages() {
  const dispatch = useDispatch();
  const { messages, user } = useSelector(selectApp);
  const { locale, dateFormat } = useSelector(selectLanguage);
  const isLoading = useSelector(selectLoading('global/getMessages'));
  const { t } = useTranslation();

  const onReadMessage = message => dispatch(actions.openMessageAction(message));
  const onReadMessages = () => dispatch(actions.readMessagesRequestAction());

  const getMessageTemplate = ({ templates }, locale, key) =>
    truncate(templates.find(({ language }) => language.code === locale)?.[key]);

  return (
    <>
      {isLoading || (!isLoading && !messages?.data?.length) ? (
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

              <StyledButton
                disabled={!user?.userConfig?.messageCount}
                type="link"
                onClick={onReadMessages}
              >
                {t(translations.header.actions.messages.actions.readed)}
              </StyledButton>
            </>
          }
          dataSource={messages?.data}
          renderItem={message => (
            <StyledListItem
              onClick={() => onReadMessage(message)}
              key={message.uuid}
              readed={
                (message.recipient.uuid === user.uuid && message.readed) ||
                message.sender.uuid === user.uuid
                  ? 1
                  : 0
              }
            >
              <StyledItemWrapper>
                <StyledSubject
                  dangerouslySetInnerHTML={{
                    __html: getMessageTemplate(message, locale, 'subject'),
                  }}
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: getMessageTemplate(message, locale, 'content'),
                  }}
                />

                <StyledListItemBottom>
                  <StyledListItemSenderWrapper>
                    {message.sender.uuid === user.uuid
                      ? t(translations.header.actions.messages.to)
                      : t(translations.header.actions.messages.from)}{' '}
                    <StyledListItemSender>
                      {message.sender.firstName} {message.sender.lastName}
                    </StyledListItemSender>
                  </StyledListItemSenderWrapper>
                  <div>{format(new Date(message.createdAt), dateFormat)}</div>
                </StyledListItemBottom>
              </StyledItemWrapper>
            </StyledListItem>
          )}
        />
      )}

      <Modal />
    </>
  );
}
