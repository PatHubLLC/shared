import { IList } from './list';
import { ITeamMember } from './teamMember';

export interface ITeam {
  id: number;
  name: string;
  description?: string;

  Lists?: IList[];
  TeamMembers?: ITeamMember[];

  createdAt?: string;
  updatedAt?: string;
}
