import React from 'react';
import { createStructuredSelector } from 'reselect';
import { makeSelectUser } from 'containers/App/selectors';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

const stateSelector = createStructuredSelector({
  user: makeSelectUser(),
});
export default function Greeting() {
  const { user } = useSelector(stateSelector);

  return (
    <div>
      <div>
        Hello {user?.firstName} {user?.lastName},
      </div>

      <div>
        {format(
          new Date(user?.userAuth?.lastSuccessfulLoggedDate),
          'dd.MM.yyyy, hh:mm aa',
        )}
      </div>

      <div>
        {format(
          new Date(user?.userAuth?.lastFailedLoggedDate),
          'dd.MM.yyyy, hh:mm aa',
        )}
      </div>
    </div>
  );
}
