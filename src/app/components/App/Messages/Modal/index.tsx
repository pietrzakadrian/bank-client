/**
 *
 * Modal
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { StyledModal } from 'app/components/App/Modal/styled';
import { StyledButton } from 'app/components/App/Button/styled';
import { selectApp } from 'app/containers/App/selectors';

interface Props {
  isOpenModal: boolean;
  setIsOpenModal: any;
}

export function Modal({ isOpenModal, setIsOpenModal }: Props) {
  const { locale } = useSelector(selectLanguage);
  const { openedMessage } = useSelector(selectApp);

  const handleReadedMessage = () => setIsOpenModal(false);

  const subject = openedMessage?.templates?.find(
    template => template.language.code === locale,
  )?.subject;
  const content = openedMessage?.templates?.find(
    template => template.language.code === locale,
  )?.content;
  const actions = openedMessage?.templates?.find(
    template => template.language.code === locale,
  )?.actions;

  return (
    <StyledModal
      title={subject}
      visible={isOpenModal}
      onOk={handleReadedMessage}
      onCancel={handleReadedMessage}
      centered={true}
      footer={actions?.map((action, index) => (
        <StyledButton
          key={index}
          hovered="true"
          type="link"
          onClick={handleReadedMessage}
        >
          <div dangerouslySetInnerHTML={{ __html: action }} />
        </StyledButton>
      ))}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledModal>
  );
}
