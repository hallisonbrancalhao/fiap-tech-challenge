export interface TransactionInterface {
  id: string;
  amount: number;
  categoryCode: string;
  merchant: string;
  merchantLogo: string;
  transactionDate: number;
  transactionType: string;
  creditDebitIndicator: string;
}
