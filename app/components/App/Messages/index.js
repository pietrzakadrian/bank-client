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
import { StyledButton } from 'components/App/Button/Button.style';
import {
  makeSelectLocale,
  makeSelectDateFormat,
} from 'providers/LanguageProvider/selectors';
import LoadingIndicator from 'components/LoadingIndicator';
import {
  openMessageModalAction,
  readAllMessagesAction,
} from 'containers/App/actions';
import {
  StyledListItem,
  StyledList,
  StyledListItemBottom,
  StyledListItemSender,
} from '../List/List.style';
import { StyledSubject } from './Messages.style';
import Modal from './Modal';

const stateSelector = createStructuredSelector({
  messages: makeSelectMessages(),
  isLoading: makeSelectIsLoading(getRequestName(GET_MESSAGES_REQUEST)),
  locale: makeSelectLocale(),
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
});

export default function Messages() {
  const {
    messages: { data },
    locale,
    isLoading,
    dateFormat,
    user,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onOpenMessageModal = (uuid) => dispatch(openMessageModalAction(uuid));
  const onReadAllMessages = () => dispatch(readAllMessagesAction());

  return (
    <>
      {isLoading || (!isLoading && !data?.length) ? (
        <StyledList>
          <StyledListItem readed="1">
            {isLoading ? (
              <LoadingIndicator />
            ) : (
              <div style={{ margin: 'auto' }}>Brak wiadomości.</div>
            )}
          </StyledListItem>
        </StyledList>
      ) : (
        <StyledList
          rowKey={({ uuid }) => uuid}
          header={
            <>
              <div>{`New messages: ${user?.userConfig?.messageCount}`}</div>

              <StyledButton
                onClick={onReadAllMessages}
                disabled={!user?.userConfig?.messageCount}
                type="link"
              >
                Mark everything as read
              </StyledButton>
            </>
          }
          dataSource={data}
          renderItem={(message) => (
            <StyledListItem
              key={message.uuid}
              onClick={() => onOpenMessageModal(message.uuid)}
              readed={message.readed ? 1 : 0}
            >
              <div style={{ width: '100%' }}>
                <StyledSubject
                  dangerouslySetInnerHTML={{
                    __html: truncateString(
                      message.templates.find(
                        (template) => template.language.code === locale,
                      )?.subject,
                    ),
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncateString(
                      message.templates.find(
                        (template) => template.language.code === locale,
                      )?.content,
                    ),
                  }}
                />

                <StyledListItemBottom>
                  <div>
                    {message.sender.uuid === user.uuid ? 'to' : 'from'}{' '}
                    <StyledListItemSender>
                      {message.sender.firstName} {message.sender.lastName}
                    </StyledListItemSender>
                  </div>
                  <div>{format(new Date(message.createdAt), dateFormat)}</div>
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
