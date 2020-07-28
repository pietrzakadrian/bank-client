/**
 *
 * Asynchronously loads the component for LoginPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoginPage = lazyLoad(
  () => import('./index'),
  module => module.LoginPage,
);
