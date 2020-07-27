/**
 *
 * Footer
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { FormattedMessage } from 'react-intl';
import { routes } from 'utils';
import {
  StyledFooter,
  StyledButton,
  StyledInfoCircleOutlined,
  StyledWarning,
  StyledTip,
} from './styles';
import messages from './messages';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledWarning>
        <StyledInfoCircleOutlined />
        <FormattedMessage {...messages.header} />
      </StyledWarning>

      <div>
        <FormattedMessage {...messages.subheader} />
        <ul>
          <li>
            <FormattedMessage {...messages.ul_li1} />
          </li>
          <li>
            <FormattedMessage {...messages.ul_li2} />
          </li>
        </ul>
      </div>

      <StyledTip>
        <FormattedMessage {...messages.warning} />
      </StyledTip>

      <div>
        <FormattedMessage {...messages.footer} />{' '}
        <StyledButton
          type="link"
          onClick={() => dispatch(push(routes.privacy.path))}
        >
          <FormattedMessage {...messages.buttonContent} />
        </StyledButton>
      </div>
    </StyledFooter>
  );
}
