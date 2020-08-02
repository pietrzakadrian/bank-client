/**
 *
 * Messages
 *
 */
import React from 'react';
import { useDispatch } from 'react-redux';

export function Messages() {
  const dispatch = useDispatch();

  //   return isLoading || (!isLoading && !messages?.data?.length) ? (
  //     <StyledList>
  //       <StyledListItem hovered="false" readed="1">
  //         {isLoading ? (
  //           <LoadingIndicator />
  //         ) : (
  //           <StyledListItemNoData>
  //             <FormattedMessage {...messagesIntl.noMessages} />
  //           </StyledListItemNoData>
  //         )}
  //       </StyledListItem>
  //     </StyledList>
  //   ) : (
  //     <StyledList
  //       rowKey={({ uuid }) => uuid}
  //       header={
  //         <>
  //           <div>
  //             <FormattedMessage {...messagesIntl.newMessages} />{' '}
  //             {user?.userConfig?.messageCount}
  //           </div>

  //           <StyledButton
  //             onClick={onReadAllMessages}
  //             disabled={!user?.userConfig?.messageCount}
  //             type="link"
  //           >
  //             <FormattedMessage {...messagesIntl.readed} />
  //           </StyledButton>
  //         </>
  //       }
  //       dataSource={messages?.data}
  //       renderItem={({
  //         uuid,
  //         readed,
  //         templates,
  //         sender,
  //         recipient,
  //         createdAt,
  //       }) => (
  //         <StyledListItem
  //           key={uuid}
  //           onClick={() => onOpenMessageModal(uuid)}
  //           readed={
  //             (recipient.uuid === user.uuid && readed) ||
  //             sender.uuid === user.uuid
  //               ? 1
  //               : 0
  //           }
  //         >
  //           <div style={{ width: '100%' }}>
  //             <StyledSubject
  //               dangerouslySetInnerHTML={{
  //                 __html: truncateString(
  //                   templates.find(template => template.language.code === locale)
  //                     ?.subject,
  //                 ),
  //               }}
  //             />

  //             <div
  //               dangerouslySetInnerHTML={{
  //                 __html: truncateString(
  //                   templates.find(template => template.language.code === locale)
  //                     ?.content,
  //                 ),
  //               }}
  //             />

  //             <StyledListItemBottom>
  //               <StyledListItemSenderWrapper>
  //                 {sender.uuid === user.uuid ? 'to' : 'from'}{' '}
  //                 <StyledListItemSender>
  //                   {sender.firstName} {sender.lastName}
  //                 </StyledListItemSender>
  //               </StyledListItemSenderWrapper>
  //               <div>{format(new Date(createdAt), dateFormat)}</div>
  //             </StyledListItemBottom>
  //           </div>
  //         </StyledListItem>
  //       )}
  //     />
  //   );

  return <div>elo</div>;
}
