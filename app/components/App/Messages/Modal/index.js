/* eslint-disable react/no-danger */
import React from 'react';
import { StyledModal } from 'components/App/Modal/Modal.style';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';
import { makeSelectLocale } from 'providers/LanguageProvider/selectors';
import {
  makeSelectIsOpenedMessage,
  makeSelectOpenedMessage,
  makeSelectMessages,
} from 'containers/App/selectors';
import {
  StyledButton,
  StyledButtonContent,
} from 'components/App/Button/Button.style';
import { closeMessageModalAction } from 'containers/App/actions';

const stateSelector = createStructuredSelector({
  isOpenedMessage: makeSelectIsOpenedMessage(),
  openedMessage: makeSelectOpenedMessage(),
  messages: makeSelectMessages(),
  locale: makeSelectLocale(),
});

export default function Modal() {
  const {
    isOpenedMessage,
    openedMessage,
    messages: { data },
    locale,
  } = useSelector(stateSelector);
  const dispatch = useDispatch();

  const onCloseMessageModal = () => dispatch(closeMessageModalAction());

  const subject = data
    ?.find((message) => message.uuid === openedMessage)
    ?.templates.find((template) => template.language.code === locale).subject;
  const content = data
    ?.find((message) => message.uuid === openedMessage)
    ?.templates.find((template) => template.language.code === locale).content;

  return (
    <StyledModal
      title={subject}
      visible={isOpenedMessage}
      onOk={onCloseMessageModal}
      onCancel={onCloseMessageModal}
      centered="true"
      footer={[
        <StyledButton type="link" onClick={onCloseMessageModal}>
          <StyledButtonContent>Ok, wyślę teraz</StyledButtonContent>
        </StyledButton>,
        <StyledButton type="link" onClick={onCloseMessageModal}>
          Ok, wyślę potem
        </StyledButton>,
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* todo: actions */}
    </StyledModal>
  );
}
