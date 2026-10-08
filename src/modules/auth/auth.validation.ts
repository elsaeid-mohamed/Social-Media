import { z } from "zod";
import { Role } from "../commen/enums/role.enum";

export const loginSchema = z
  .strictObject({
    email: z.email({ error: "invalid email" }),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .superRefine((val, ctx) => {
    if (val.password !== val.confirmPassword) {
      ctx.addIssue({
        path: ["password", "confirmPassword"],
        code: "custom",
        message: "confirm password must be equal password",
      });
    }
    if (val.email.length >= 50) {
      ctx.addIssue({
        path: ["email"],
        code: "custom",
        message: "Too many chars",
      });
    }
  });

export const emailVal = loginSchema.omit({ password: true });

export const emailPartialVal = loginSchema.partial({ password: true });

export const signUpSchema = loginSchema.safeExtend({
  username: z.string().optional(),
  age: z.int().gte(5).lte(80).multipleOf(5),
  is_grad: z.coerce.boolean(),
  role: z.enum(Role),
  skills: z.array(z.number()).length(5),
  tup: z.tuple([z.number(), z.string()]),
});