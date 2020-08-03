/**
 *
 * Modal
 *
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectLanguage } from 'app/providers/LanguageProvider/selectors';
import { StyledModal } from 'app/components/App/Modal/styled';
import { StyledButton } from 'app/components/App/Button/styled';
import { selectApp } from 'app/containers/App/selectors';
import { actions } from 'app/containers/App/slice';
import { selectOpenedMessageTemplate } from 'app/containers/App/selectors';

export function Modal() {
  const { locale } = useSelector(selectLanguage);
  const { isOpenedMessage } = useSelector(selectApp);
  const openedMessageTemplate = useSelector(
    selectOpenedMessageTemplate(locale),
  );
  const dispatch = useDispatch();

  const onCloseMessage = () => dispatch(actions.closeMessageAction());

  return (
    <StyledModal
      title={openedMessageTemplate?.subject}
      visible={isOpenedMessage}
      onOk={onCloseMessage}
      onCancel={onCloseMessage}
      centered={true}
      footer={openedMessageTemplate?.actions?.map((action, index) => (
        <StyledButton
          key={index}
          hovered="true"
          type="link"
          onClick={onCloseMessage}
        >
          <div dangerouslySetInnerHTML={{ __html: action }} />
        </StyledButton>
      ))}
    >
      <div
        dangerouslySetInnerHTML={{ __html: openedMessageTemplate?.content }}
      />
    </StyledModal>
  );
}
