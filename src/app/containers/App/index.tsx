/**
 *
 * App
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectApp } from './selectors';
import { appSaga } from './saga';

interface Props {}

export function App(props: Props) {
  useInjectSaga({ key: sliceKey, saga: appSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const app = useSelector(selectApp);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
}
