/* --- STATE --- */
export interface RegistrationPageState {
  firstName: string;
  lastName: string;
  currency: string;
  email: string;
  password: string;
  pinCode: number | string;
  currentStep: number;
}

export type ContainerState = RegistrationPageState;
