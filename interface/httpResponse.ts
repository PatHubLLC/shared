import { IApplication, IUsptoData } from './application';
import { IExaminer } from './examiner';
import { IList } from './list';
import { ITracking } from './tracking';

interface IBaseResponse {
  error?: string;
  result?: any;
}

export interface IEmptyResponse extends IBaseResponse {
  result: {};
}

export interface IGetApplicationResponse extends IBaseResponse {
  result: IApplication;
}

export interface ILoginResponse extends IBaseResponse {
  result: {
    token: string;
  };
}

export enum GetBrowseType {
  // Applications which get update events recently.
  RecentUpdated = 'RECENT_UPDATED',
  // Recently added applications (new applications).
  NewlyAdded = 'NEWLY_ADDED',

  // Matched by application ID.
  MatchedByApplicationNumber = 'MATCHED_BY_APPLICATION_NUM',
  // Matched by title.
  MatchedByApplicationTitle = 'MATCHED_BY_APPLICATION_TITLE',
  MatchedByPublicationNumber = 'MATCHED_BY_PUBLICATION_NUMBER',
  MatchedByPatentNumber = 'MATCHED_BY_PATENT_NUMBER',
}

export interface IGetBrowseShelf {
  type: GetBrowseType;
  label: string;
  applications: Array<IApplication>;
}

export interface IGetBrowseResponse {
  result: Array<IGetBrowseShelf>;
}

export interface IGetTrackingsResponse extends IBaseResponse {
  result: ITracking[];
}

export interface IUsptoDataResponse {
  result: IUsptoData;
}

export interface IGetExaminerResponse {
  result: IExaminer[];
}

export interface IGetListsResponse {
  result: IList[];
}
