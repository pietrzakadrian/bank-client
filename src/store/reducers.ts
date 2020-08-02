/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
import { connectRouter, RouterState } from 'connected-react-router';
import { InjectedReducersType } from 'utils/types/injector-typings';
import { history } from 'utils/history';

import { reducer as AppReducer } from 'app/containers/App/slice';
import { reducer as ErrorReducer } from 'app/providers/ErrorProvider/slice';
import { reducer as LoadingReducer } from 'app/providers/LoadingProvider/slice';
import { reducer as LanguageReducer } from 'app/providers/LanguageProvider/slice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers: InjectedReducersType = {}) {
  return combineReducers({
    global: AppReducer,
    loading: LoadingReducer,
    error: ErrorReducer,
    language: LanguageReducer,
    router: connectRouter(history) as Reducer<RouterState, AnyAction>,
    ...injectedReducers,
  });
}
