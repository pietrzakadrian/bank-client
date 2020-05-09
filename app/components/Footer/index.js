/**
 *
 * Footer
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
import { push } from 'connected-react-router';
import {
  StyledFooter,
  StyledButton,
  StyledWarning,
  StyledTip,
  StyledList,
} from './Footer.style';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Footer() {
  const dispatch = useDispatch();

  return (
    <StyledFooter>
      <StyledWarning>
        <InfoCircleOutlined style={{ fontSize: 40, marginRight: 13 }} />
        Remember the basic safety rules.
      </StyledWarning>

      <StyledList>
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
      </StyledList>

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

Footer.propTypes = {};

export default Footer;
