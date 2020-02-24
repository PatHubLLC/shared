import { IApplication } from './application';

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
