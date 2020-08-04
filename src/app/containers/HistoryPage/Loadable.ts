/**
 *
 * Asynchronously loads the component for HistoryPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const HistoryPage = lazyLoad(
  () => import('./index'),
  module => module.HistoryPage,
);
