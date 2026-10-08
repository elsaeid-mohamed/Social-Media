import { Response } from "express";

export const successResponse = <T>({
  res,
  status = 200,
  message = "Done",
  data,
}: {
  res: Response;
  status?: number;
  message?: string;
  data: T;
}) => {
  res.status(status).json({ message, data });
};