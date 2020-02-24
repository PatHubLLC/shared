import { ITransaction } from './transaction';
import { IUser } from './user';

export interface IReceipt {
  id: number;
  createdAt: string;
  Transaction?: ITransaction;
  User?: Partial<IUser>;
  isRead: boolean;
}
