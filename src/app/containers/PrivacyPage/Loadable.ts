/**
 *
 * Asynchronously loads the component for PrivacyPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PrivacyPage = lazyLoad(
  () => import('./index'),
  module => module.PrivacyPage,
);
