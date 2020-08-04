/**
 *
 * Asynchronously loads the component for PaymentPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentPage = lazyLoad(
  () => import('./index'),
  module => module.PaymentPage,
);
