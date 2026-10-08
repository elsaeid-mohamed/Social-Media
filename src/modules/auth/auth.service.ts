import { NextFunction, Request, Response } from "express";

class AuthService {
  constructor() {}

  async login(req: Request, res: Response, next: NextFunction) {
    // مؤقتاً: بيرجع بيانات تجريبية
    return { message: "user login" };
  }
}

export default new AuthService();