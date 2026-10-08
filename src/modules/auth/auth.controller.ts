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
        error: JSON.parse(result.error as any),
      });
    }
    const user = await authService.login(req, res, next);
    return successResponse({ res, message: "login successfully", data: user });
  },
);

export default authRouter;