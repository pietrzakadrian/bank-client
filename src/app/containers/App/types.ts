/* --- STATE --- */
export interface AppState {
  isCollapsedSidebar: boolean;
  isCollapsedDrawer: boolean;
  isLogged: boolean;
  token: any;
  user: any;
  currencies: any[];
  messages: any;
  openedMessage: any;
  notifications: any;
}

export type ContainerState = AppState;
