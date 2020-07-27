/* eslint-disable react/no-danger */
import React from 'react';
import { StyledModal } from 'components/App/Modal/styles';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import {
  makeSelectIsOpenedMessage,
  makeSelectOpenedMessage,
  makeSelectMessages,
} from 'containers/App/selectors';
import { StyledButton } from 'components/App/Button/styles';
import { closeMessageModalAction } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  isOpenedMessage: makeSelectIsOpenedMessage(),
  openedMessage: makeSelectOpenedMessage(),
  messages: makeSelectMessages(),
  locale: makeSelectLocale(),
});

export default function Modal() {
  const { isOpenedMessage, openedMessage, messages, locale } = useSelector(
    stateSelector,
  );
  const dispatch = useDispatch();

  const onCloseMessageModal = () => dispatch(closeMessageModalAction());

  const subject = messages?.data
    ?.find((message) => message.uuid === openedMessage)
    ?.templates.find((template) => template.language.code === locale)?.subject;
  const content = messages?.data
    ?.find((message) => message.uuid === openedMessage)
    ?.templates.find((template) => template.language.code === locale)?.content;
  const actions = messages?.data
    ?.find((message) => message.uuid === openedMessage)
    ?.templates.find((template) => template.language.code === locale)?.actions;

  return (
    <StyledModal
      title={subject}
      visible={isOpenedMessage}
      onOk={onCloseMessageModal}
      onCancel={onCloseMessageModal}
      centered="true"
      footer={actions?.map((action, index) => (
        <StyledButton
          key={index}
          hovered="true"
          type="link"
          onClick={onCloseMessageModal}
        >
          <div dangerouslySetInnerHTML={{ __html: action }}></div>
        </StyledButton>
      ))}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledModal>
  );
}
