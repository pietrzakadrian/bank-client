import { useSelector, useDispatch } from 'react-redux';
import { selectApp } from '../App/selectors';
import { useEffect } from 'react';
import { push } from 'connected-react-router';
import routes from 'utils/routes';

export function HomePage() {
  const { isLogged } = useSelector(selectApp);
  const dispatch = useDispatch();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    if (isLogged) {
      dispatch(push(routes.dashboard.path));
    } else {
      dispatch(push(routes.login.path));
    }
  });

  return null;
}
