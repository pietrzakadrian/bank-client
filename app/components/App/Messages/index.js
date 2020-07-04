/* eslint-disable react/no-danger */
/* eslint-disable no-shadow */
import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectMessages } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { getRequestName, dateFormat } from 'helpers';
import { makeSelectIsLoading } from 'providers/LoadingProvider/selectors';
import {
  StyledTable,
  StyledTableWrapper,
} from 'components/App/Table/Table.style';
import { format } from 'date-fns';
import { GET_MESSAGES_REQUEST } from 'containers/App/constants';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';

const stateSelector = createStructuredSelector({
  messages: makeSelectMessages(),
  isLoading: makeSelectIsLoading(getRequestName(GET_MESSAGES_REQUEST)),
  locale: makeSelectLocale(),
});

export default function Messages() {
  const { messages, locale } = useSelector(stateSelector);

  const columns = [
    {
      render: (messages) => (
        <div
          dangerouslySetInnerHTML={{
            __html: messages.templates.find(
              (template) => template.language.code === locale,
            ).content,
          }}
        ></div>
      ),
    },
    {
      dataIndex: 'createdAt',
      render: (text) => (
        <>
          {format(
            new Date(text),
            locale === 'en' ? dateFormat(12) : dateFormat(24),
          )}
        </>
      ),
    },
  ];

  return (
    <StyledTableWrapper>
      <StyledTable
        showHeader={false}
        pagination={false}
        dataSource={messages}
        columns={columns}
        rowKey={({ uuid }) => uuid}
      />
    </StyledTableWrapper>
  );
}
