/**
 *
 * Footer
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import {
  StyledFooter,
  StyledButton,
  StyledInfoCircleOutlined,
  StyledWarning,
  StyledTip,
} from './Footer.style';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledWarning>
        <StyledInfoCircleOutlined />
        Remember the basic safety rules.
      </StyledWarning>

      <div>
        Before you enter your ID number and access password on your website,
        make sure
        <ul>
          <li>
            Your password is secure. It contains at least 8 characters and
            consists of uppercase and lowercase letters
          </li>
          <li>
            in the address bar or status bar, a padlock is visible at the bottom
            of the browser screen
          </li>
        </ul>
      </div>

      <StyledTip>
        Remember: The bank does not require confirmation of any data, correct
        login or reading of the Banks messages by means of SMS, TAN and / or
        e-mail, or installation of any applications on the users phones or
        computers.
      </StyledTip>

      <div>
        This site uses cookies to provide services at the highest level. By
        clicking or navigating the site, you agree to allow our collection of
        information on through cookies. For more information on security, please
        visit:{' '}
        <StyledButton type="link" onClick={() => dispatch(push('/privacy'))}>
          Privacy rules
        </StyledButton>
      </div>
    </StyledFooter>
  );
}
