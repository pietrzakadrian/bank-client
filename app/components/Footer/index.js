/**
 *
 * Footer
 *
 */

import React from 'react';
import { useDispatch } from 'react-redux';
import { InfoCircleOutlined } from '@ant-design/icons';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { push } from 'connected-react-router';
// import messages from './messages';

function Footer() {
  const dispatch = useDispatch();

  return (
    <div>
      <InfoCircleOutlined />
      Remember the basic safety rules. Before you enter your ID number and
      access password on your website, make sure Your password is secure. It
      contains at least 8 characters and consists of uppercase and lowercase
      letters in the address bar or status bar, a padlock is visible at the
      bottom of the browser screen Remember: The bank does not require
      confirmation of any data, correct login or reading of the Banks messages
      by means of SMS, TAN and / or e-mail, or installation of any applications
      on the users phones or computers. This site uses cookies to provide
      services at the highest level. By clicking or navigating the site, you
      agree to allow our collection of information on through cookies. For more
      information on security, please visit:{' '}
      <button type="button" onClick={() => dispatch(push('/privacy'))}>
        Privacy rules
      </button>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
