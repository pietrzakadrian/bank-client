import { useSelector, useDispatch } from 'react-redux';
import { selectApp } from '../App/selectors';
import { useEffect } from 'react';
import { push } from 'connected-react-router';
import routes from 'utils/routes';

export function HomePage() {
  const { isLogged } = useSelector(selectApp);
  const dispatch = useDispatch();

  const onRedirect = path => dispatch(push(path));

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    if (isLogged) {
      onRedirect(routes.dashboard.path);
    } else {
      onRedirect(routes.login.path);
    }
  });

  return null;
}
