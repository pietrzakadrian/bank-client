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

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>PrivacyPage</title>
        <meta name="description" content="Description of PrivacyPage" />
      </Helmet>

      <Header />
      <Subheader pageTitle={routes.privacy.name} />
    </>
  );
}
