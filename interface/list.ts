import { ITeam } from './team';
import { ITracking2 } from './tracking2';
import { IUser } from './user';

export interface IList {
  id: number;
  title: string;

  User?: Partial<IUser>;
  userId?: number;
  Team?: Partial<ITeam>;
  teamId?: number;
  Trackings?: ITracking2[];
  createdAt?: string;
  updatedAt?: string;
}
