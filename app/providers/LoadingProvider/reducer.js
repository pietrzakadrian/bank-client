/*
 *
 * LoadingProviderReducer reducer
 *
 */

import produce from 'immer';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loadingProviderReducer = produce((draft, action) => {
  const matches = /(.*)_(REQUEST|SUCCESS|ERROR|INCORRECT)/.exec(action.type);

  if (!matches) return;

  const [, requestName, requestState] = matches;

  draft[requestName] = requestState === 'REQUEST';
}, initialState);

export default loadingProviderReducer;
