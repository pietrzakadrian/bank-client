/*
 *
 * LoadingProviderReducer reducer
 *
 */

import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const errorProviderReducer = produce((draft, action) => {
  const matches = /(.*)_(REQUEST|ERROR)/.exec(action.type);

  if (!matches) return;

  const [, requestName, requestState] = matches;

  draft[requestName] = requestState === 'ERROR' ? action.error : '';
}, initialState);

export default errorProviderReducer;
