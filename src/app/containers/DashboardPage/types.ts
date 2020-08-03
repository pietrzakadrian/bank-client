/* --- STATE --- */
export interface DashboardPageState {
  amountMoney: string;
  currencyName: string;
  savingsPercent: string;
  savingsData: any;
  savingsColors: any;
  bills: any;
  accountBalanceHistory: any;
  recentTransactions: any;
  currency: string;
}

export type ContainerState = DashboardPageState;
