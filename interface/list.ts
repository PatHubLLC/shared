import { ITeam } from './team';
import { ITracking2 } from './tracking2';
import { IUser } from './user';

export interface IList {
  readonly id: number;
  readonly title: string;

  readonly User?: Partial<IUser>;
  readonly userId?: number;
  readonly Team?: Partial<ITeam>;
  readonly teamId?: number;
  readonly Trackings?: ITracking2[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
