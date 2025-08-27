interface IError<E> {
  data?: IErrorData<E>;
  message?: string;
}

interface IErrorData<E> {
  message: string;
  errors: E;
}

interface IObjectResponse<T> {
  data?: T;
}

interface IArrayResponse<T> {
  data?: T[];
}

interface IMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

interface IPaginationResponse<T> {
  data?: T[];
  meta?: IMeta;
}

export type {
  IError,
  IErrorData,
  IObjectResponse,
  IArrayResponse,
  IPaginationResponse,
};