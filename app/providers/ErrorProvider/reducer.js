/*
 *
 * ErrorProvider reducer
 *
 */

import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const errorProviderReducer = produce((draft, action) => {
  const matches = /(.*)_(REQUEST|ERROR|INCORRECT)/.exec(action.type);

  if (!matches) return initialState;

  const [, requestName, requestState] = matches;

  draft[requestName] =
    (requestState === 'ERROR' || requestState === 'INCORRECT') && action.error;
}, initialState);

export default errorProviderReducer;
