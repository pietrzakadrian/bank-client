/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { PageHeader } from 'antd';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import { StyledSubheader, StyledPageHeader } from './Subheader.style';
import LocaleToggle from '../LocaleToggle';

function Subheader({ pageTitle }) {
  return (
    <>
      <StyledSubheader>
        <StyledPageHeader title={pageTitle} />
        <LocaleToggle />
      </StyledSubheader>
    </>
  );
}

Subheader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Subheader;
