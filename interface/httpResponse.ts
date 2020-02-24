import { IApplication } from './application';
import { ITracking } from './tracking';

interface BaseResponse {
  error?: string;
  result?: any;
}

export interface EmptyResponse extends BaseResponse {
  result: {};
}

export interface GetApplicationResponse extends BaseResponse {
  result: IApplication;
}

export interface LoginResponse extends BaseResponse {
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

export interface IGetTrackingsResponse extends BaseResponse {
  result: ITracking[];
}
