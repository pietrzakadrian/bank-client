/**
 *
 * Layout
 *
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectApp } from 'app/containers/App/selectors';
import { Drawer } from 'app/components/App/Drawer';
import { Copyright } from 'app/components/App/Copyright';
import { Sidebar } from 'app/components/App/Sidebar';
import { Header } from 'app/components/App/Header';
import { StyledContent, StyledLayout } from './styled';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  const { isCollapsedSidebar } = useSelector(selectApp);

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
