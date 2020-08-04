/**
 *
 * Asynchronously loads the component for SettingsPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const SettingsPage = lazyLoad(
  () => import('./index'),
  module => module.SettingsPage,
);
