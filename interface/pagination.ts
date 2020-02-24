export interface Pagination {
  limit: number;
  offset: number;
  sort?: string;
  dir?: 'ASC' | 'DESC';
}
