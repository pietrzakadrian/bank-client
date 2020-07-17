/**
 *
 * PrivacyPage
 *
 */

import React from 'react';
import Header from 'components/Header';
import Subheader from 'components/Subheader';
import { Helmet } from 'react-helmet-async';
import { routes } from 'utils';
import ConstantCookie from 'components/ConstantCookie';
import Privacy from 'components/Privacy';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export default function PrivacyPage() {
  return (
    <>
      <FormattedMessage {...messages.privacy}>
        {(title) => <Helmet title={title} />}
      </FormattedMessage>

      <Header />
      <Subheader pageTitle={routes.privacy.name} />

      <Privacy />

      <ConstantCookie />
    </>
  );
}
