/**
 *
 * Asynchronously loads the component for DashboardPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const DashboardPage = lazyLoad(
  () => import('./index'),
  module => module.DashboardPage,
);
