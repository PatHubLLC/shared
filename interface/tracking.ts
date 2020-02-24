import { IApplication } from './application';

export interface ITracking {
  readonly applicationId: number;
  readonly id: number;
  readonly userId: number;

  readonly createdAt?: string;
  readonly updatedAt?: string;

  readonly Application: IApplication;
}
