import { ErrorRequestHandler } from "express";

export interface IError extends Error {
  statusCode: number;
}

export const globalError: ErrorRequestHandler = (err: IError, req, res, next) => {
  console.log({ err: err.cause });
  const message = err.message || "internal server error";
  const status = err.statusCode || 500;

  res.status(status).json({ message, stack: err.stack });
};

export default globalError;