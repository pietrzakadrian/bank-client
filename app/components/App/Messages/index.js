/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectMessages, makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { getRequestName, truncateString } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import { format } from 'date-fns';
import { GET_MESSAGES_REQUEST } from 'containers/App/constants';
import { StyledButton } from 'components/App/Button/Button.style';
import {
  makeSelectLocale,
  makeSelectDateFormat,
} from 'providers/LanguageProvider/selectors';
import { StyledListItem, StyledList } from '../List/List.style';

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

  return (
    <StyledList
      rowKey={({ uuid }) => uuid}
      style={{ background: 'white' }}
      header={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>{`New messages: ${user.userConfig.messageCount}`}</div>
          <div>
            <StyledButton type="link">Mark everything as read</StyledButton>
          </div>
        </div>
      }
      dataSource={data}
      renderItem={(message) => (
        <StyledListItem readed={message.readed.toString()}>
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

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {message.sender.uuid === user.uuid ? 'to' : 'from'}{' '}
                {message.sender.firstName} {message.sender.lastName}
              </div>
              <div>{format(new Date(message.createdAt), dateFormat)}</div>
            </div>
          </div>
        </StyledListItem>
      )}
    />
  );
}
