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
import {
  openMessageModalAction,
  readAllMessagesAction,
} from 'containers/App/actions';
import { StyledListItem, StyledList } from '../List/List.style';
import { StyledListItemBottom } from './Messages.style';
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
    dateFormat,
    user,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onOpenMessageModal = (uuid) => dispatch(openMessageModalAction(uuid));
  const onReadAllMessages = () => dispatch(readAllMessagesAction());

  return (
    <>
      <StyledList
        rowKey={({ uuid }) => uuid}
        header={
          <>
            <div>{`New messages: ${user?.userConfig?.messageCount}`}</div>
            <div>
              <StyledButton onClick={onReadAllMessages} type="link">
                Mark everything as read
              </StyledButton>
            </div>
          </>
        }
        dataSource={data}
        renderItem={(message) => (
          <StyledListItem
            key={message.uuid}
            onClick={() => onOpenMessageModal(message.uuid)}
            readed={message.readed ? 1 : 0}
          >
            <div>
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateString(
                    message.templates.find(
                      (template) => template.language.code === locale,
                    ).subject,
                  ),
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: truncateString(
                    message.templates.find(
                      (template) => template.language.code === locale,
                    ).content,
                  ),
                }}
              />

              <StyledListItemBottom>
                <div>
                  {message.sender.uuid === user.uuid ? 'to' : 'from'}{' '}
                  {message.sender.firstName} {message.sender.lastName}
                </div>
                <div>{format(new Date(message.createdAt), dateFormat)}</div>
              </StyledListItemBottom>
            </div>
          </StyledListItem>
        )}
      />

      <Modal />
    </>
  );
}
