import { IApplication } from './application';
import { IList } from './list';

export interface ITracking2 {
  readonly id: number;
  readonly applicationId: number;
  readonly listId: number;

  readonly createdAt?: string;
  readonly updatedAt?: string;

  readonly Application?: IApplication;
  readonly List?: IList;
}
