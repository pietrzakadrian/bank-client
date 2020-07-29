import { ContainerState } from './types';
import produce from 'immer';

// The initial state of the App container
export const initialState: ContainerState = {};

export const reducer = produce((draft, action) => {
  const matches = /(.*)(Request|Error|Success)/.exec(action.type);

  if (!matches) {
    return initialState;
  }

  const [, requestName, requestState] = matches;

  draft[requestName] = requestState === 'Request';
}, initialState);
