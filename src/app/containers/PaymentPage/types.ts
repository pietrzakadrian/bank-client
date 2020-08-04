/* --- STATE --- */
export interface PaymentPageState {
  transaction: string;
  bills: any;
  recipients: any;
  senderBill: any;
  recipientBill: any;
  amountMoney: string;
  transferTitle: string;
  authorizationKey: string;
  currentStep: number;
  hasCreatedTransaction: boolean;
}

export type ContainerState = PaymentPageState;
