export default interface IError extends Error {
  type: string;
  status: number;
  message: string;
}
