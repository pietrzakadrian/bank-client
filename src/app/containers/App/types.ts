/* --- STATE --- */
export interface AppState {
  isCollapsedSidebar: boolean;
  isCollapsedDrawer: boolean;
  isLogged: boolean;
  token: any;
  user: any;
  currencies: any[];
}

export type ContainerState = AppState;
