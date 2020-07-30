/**
 *
 * Asynchronously loads the component for RegistrationPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const RegistrationPage = lazyLoad(
  () => import('./index'),
  module => module.RegistrationPage,
);
