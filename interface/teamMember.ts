import { ITeam } from './team';
import { IUser } from './user';

export enum MemberPermission {
  Admin = 'admin',
  Normal = 'normal',
}

export interface ITeamMember {
  id: number;

  User?: IUser;

  Team?: ITeam;

  isPending: boolean;

  permisson: MemberPermission;

  createdAt?: string;
  updatedAt?: string;
}
