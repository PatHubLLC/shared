import { IApplication } from './application';
import { IReceipt } from './receipt';
import { ITodo } from './todo';
import { ITransactionCode } from './transactionCode';

export interface ITransaction {
  TransactionCode: ITransactionCode;

  applicationId: number;
  createdAt: number;
  id: number;
  recordDate: string;
  transactionCodeId: number;
  updatedAt: string;

  Todos?: ITodo[];
  Application?: IApplication;
  Receipts?: IReceipt[];
}
