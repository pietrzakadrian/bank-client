/**
 *
 * Messages
 *
 */
import React, { useState } from 'react';
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
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch();
  const { messages, user } = useSelector(selectApp);
  const isLoading = useSelector(selectLoading('global/getMessages'));
  const { locale, dateFormat } = useSelector(selectLanguage);
  const { t } = useTranslation();

  const handleMessage = message => {
    onReadMessage(message);
    setIsOpenModal(true);
  };
  const onReadMessage = message => dispatch(actions.openMessageAction(message));
  const onReadMessages = () => dispatch(actions.readMessagesRequestAction());

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
              onClick={() => handleMessage(message)}
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
                    __html: truncate(
                      message.templates.find(
                        template => template.language.code === locale,
                      )?.subject,
                    ),
                  }}
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: truncate(
                      message.templates.find(
                        template => template.language.code === locale,
                      )?.content,
                    ),
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

      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </>
  );
}
