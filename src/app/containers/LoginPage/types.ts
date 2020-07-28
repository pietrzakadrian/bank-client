/* --- STATE --- */
export interface LoginPageState {
  pinCode: number | string;
  password: string;
  currentStep: number;
}

export type ContainerState = LoginPageState;
