/* --- STATE --- */
export interface AppState {
  isCollapsedSidebar: boolean;
  isCollapsedDrawer: boolean;
  isLogged: boolean;
  isOpenedMessage: boolean;
  token: any;
  user: any;
  layout: any;
  currencies: any[];
  messages: any;
  openedMessage: any;
  notifications: any;
}

export type ContainerState = AppState;
