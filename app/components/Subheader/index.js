/**
 *
 * Subheader
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import StyledSubheader from './Subheader.style';

function Subheader({ pageTitle }) {
  return (
    <>
      <StyledSubheader>
        <PageHeader title={pageTitle} />
        <div>Local toggle</div>
      </StyledSubheader>
    </>
  );
}

Subheader.propTypes = {
  pageTitle: PropTypes.string.isRequired,
};

export default Subheader;
