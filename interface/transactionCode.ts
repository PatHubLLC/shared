export enum TransactionCodeType {
  Info = 'info', // Gray
  Warning = 'warning', // Red
  Success = 'success', // Green
}

export enum Initiator {
  Uspto = 'uspto',
  Applicant = 'applicant',
}

export interface ITransactionCode {
  code: string;
  type: TransactionCodeType;
  createdAt: string;
  description: string;
  id: number;
  updatedAt: string;
  initiator: Initiator;
  isActionable: boolean;
}
