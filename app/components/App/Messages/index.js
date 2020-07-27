/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectMessages, makeSelectUser } from 'containers/App/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getRequestName, truncateString } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { format } from 'date-fns';
import { GET_MESSAGES_REQUEST } from 'containers/App/constants';
import { StyledButton } from 'components/App/Button/styles';
import {
  makeSelectLocale,
  makeSelectDateFormat,
} from 'providers/LanguageProvider/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  openMessageModalAction,
  readAllMessagesAction,
} from 'containers/App/actions';
import { FormattedMessage } from 'react-intl';
import {
  StyledListItem,
  StyledList,
  StyledListItemBottom,
  StyledListItemSender,
  StyledListItemNoData,
  StyledListItemSenderWrapper,
} from 'components/App/List/styles';
import { StyledSubject } from './styles';
import messagesIntl from './messages';
import Modal from './Modal';

const stateSelector = createStructuredSelector({
  messages: makeSelectMessages(),
  isLoading: makeSelectIsLoading(getRequestName(GET_MESSAGES_REQUEST)),
  locale: makeSelectLocale(),
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
});

export default function Messages() {
  const { messages, locale, isLoading, dateFormat, user } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();

  const onOpenMessageModal = (uuid) => dispatch(openMessageModalAction(uuid));
  const onReadAllMessages = () => dispatch(readAllMessagesAction());

  return (
    <>
      {isLoading || (!isLoading && !messages?.data?.length) ? (
        <StyledList>
          <StyledListItem hovered="false" readed="1">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <StyledListItemNoData>
                <FormattedMessage {...messagesIntl.noMessages} />
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
                <FormattedMessage {...messagesIntl.newMessages} />{' '}
                {user?.userConfig?.messageCount}
              </div>

              <StyledButton
                onClick={onReadAllMessages}
                disabled={!user?.userConfig?.messageCount}
                type="link"
              >
                <FormattedMessage {...messagesIntl.readed} />
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
              onClick={() => onOpenMessageModal(uuid)}
              readed={
                (recipient.uuid === user.uuid && readed) ||
                sender.uuid === user.uuid
                  ? 1
                  : 0
              }
            >
              <div style={{ width: '100%' }}>
                <StyledSubject
                  dangerouslySetInnerHTML={{
                    __html: truncateString(
                      templates.find(
                        (template) => template.language.code === locale,
                      )?.subject,
                    ),
                  }}
                />

                <div
                  dangerouslySetInnerHTML={{
                    __html: truncateString(
                      templates.find(
                        (template) => template.language.code === locale,
                      )?.content,
                    ),
                  }}
                />

                <StyledListItemBottom>
                  <StyledListItemSenderWrapper>
                    {sender.uuid === user.uuid ? 'to' : 'from'}{' '}
                    <StyledListItemSender>
                      {sender.firstName} {sender.lastName}
                    </StyledListItemSender>
                  </StyledListItemSenderWrapper>
                  <div>{format(new Date(createdAt), dateFormat)}</div>
                </StyledListItemBottom>
              </div>
            </StyledListItem>
          )}
        />
      )}

      <Modal />
    </>
  );
}
