import { z } from "zod";
import { loginSchema, signUpSchema } from "../auth.validation";

export type ILogin = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;