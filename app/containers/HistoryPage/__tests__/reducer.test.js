import produce from 'immer';

import historyPageReducer from '../reducer';
import { getTransactionHistorySuccessAction } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('historyPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      transactions: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(historyPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getTransactionHistorySuccess action correctly', () => {
    const fixture = ['transactions'];
    const expectedResult = produce(state, (draft) => {
      draft.transactions = fixture;
    });

    expect(
      historyPageReducer(state, getTransactionHistorySuccessAction(fixture)),
    ).toEqual(expectedResult);
  });
});
