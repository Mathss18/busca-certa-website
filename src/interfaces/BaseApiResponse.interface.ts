export type BaseApiResponse<T> = {
  success: boolean;
  data: T;
  message: string;
};
