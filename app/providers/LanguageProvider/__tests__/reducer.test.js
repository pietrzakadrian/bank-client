import languageProviderReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('languageProviderReducer', () => {
  it('returns the initial state', () => {
    expect(languageProviderReducer(undefined, {})).toEqual({
      locale: 'en',
      dateFormat: 'dd.MM.yyyy, hh:mm aa',
    });
  });
});
