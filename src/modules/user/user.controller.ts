import { NextFunction, Request, Response, Router } from "express";
import { successResponse } from "../commen/response";

const userRouter = Router();

userRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  return successResponse<{ username: string; age: number }>({
    res,
    data: { username: "Elsaeid", age: 19 },
  });
});

export default userRouter;