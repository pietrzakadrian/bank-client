/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectMessages,
  makeSelectUser,
  makeSelectIsOpenedMessage,
  makeSelectOpenedMessage,
} from 'containers/App/selectors';
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
import Modal from 'antd/lib/modal/Modal';
import { toggleMessageAction } from 'containers/App/actions';
import { StyledListItem, StyledList } from '../List/List.style';
import { StyledListItemBottom } from './Messages.style';

const stateSelector = createStructuredSelector({
  isOpenedMessage: makeSelectIsOpenedMessage(),
  openedMessage: makeSelectOpenedMessage(),
  messages: makeSelectMessages(),
  isLoading: makeSelectIsLoading(getRequestName(GET_MESSAGES_REQUEST)),
  locale: makeSelectLocale(),
  dateFormat: makeSelectDateFormat(),
  user: makeSelectUser(),
});

export default function Messages() {
  const {
    isOpenedMessage,
    openedMessage,
    messages: { data },
    locale,
    dateFormat,
    user,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onToggleMessageModal = (uuid) => dispatch(toggleMessageAction(uuid));

  return (
    <>
      <StyledList
        rowKey={({ uuid }) => uuid}
        header={
          <>
            <div>{`New messages: ${user.userConfig.messageCount}`}</div>
            <div>
              <StyledButton type="link">Mark everything as read</StyledButton>
            </div>
          </>
        }
        dataSource={data}
        renderItem={(message) => (
          <StyledListItem
            onClick={() => onToggleMessageModal(message.uuid)}
            readed={message.readed.toString()}
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

      <Modal
        title={
          data
            .find((message) => message.uuid === openedMessage)
            ?.templates.find((template) => template.language.code === locale)
            .subject
        }
        visible={isOpenedMessage}
        onOk={() => console.log('ok')}
        onCancel={() => console.log('bye')}
      >
        <div
          dangerouslySetInnerHTML={{
            __html: data
              .find((message) => message.uuid)
              ?.templates.find((template) => template.language.code === locale)
              .content,
          }}
        />
        {/* todo: actions */}
      </Modal>
    </>
  );
}
