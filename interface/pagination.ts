export interface IPagination {
  limit: number;
  offset: number;
  sort?: string;
  dir?: 'ASC' | 'DESC';
}
