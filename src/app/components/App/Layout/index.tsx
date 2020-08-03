/**
 *
 * Layout
 *
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import { Drawer } from 'app/components/App/Drawer';
import { Copyright } from 'app/components/App/Copyright';
import { Sidebar } from 'app/components/App/Sidebar';
import { Header } from 'app/components/App/Header';
import { StyledContent, StyledLayout } from './styled';
import { actions } from 'app/containers/App/slice';
import _ from 'lodash';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { isCollapsedSidebar, user, isLogged } = useSelector(selectApp);
  const dispatch = useDispatch();

  const onGetUser = () => dispatch(actions.getUserRequestAction());

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, [isLogged]);
  };

  useEffectOnMount(() => {
    if (_.isEmpty(user) && isLogged) {
      onGetUser();
    }
  });

  return (
    <>
      <Drawer />
      <Sidebar />
      <StyledLayout opened={isCollapsedSidebar}>
        <Header />
        <StyledContent>{children}</StyledContent>
        <Copyright />
      </StyledLayout>
    </>
  );
}
