import { ITransaction } from './transaction';

export enum TodoStatus {
  Pending = 'pending',
  Done = 'done',
}

export interface ITodo {
  id: number;
  status: TodoStatus;
  remindDate: string;
  Transaction?: ITransaction;
}
