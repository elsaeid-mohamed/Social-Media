import { NextFunction, Request, Response, Router } from "express";
import authService from "./auth.service";
import { successResponse } from "../commen/response";
import { loginSchema } from "./auth.validation";
import { BadRequestException } from "../commen/response/application-exception";

const authRouter = Router();

authRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const result = loginSchema.safeParse(req.body);
    if (!result.success) {
      throw new BadRequestException("validation error", {
        error: result.error.issues,
      });
    }
    const data = authService.login(result.data);
    return successResponse({
      res,
      message: "login successfully",
      data,
    });
  },
);

export default authRouter;