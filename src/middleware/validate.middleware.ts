import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodRawShape } from "zod";
import { AppError } from "../utils/AppError";

export const validate =
  (schema: ZodObject<ZodRawShape>) =>
  (req: Request, _res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        params: req.params,
        query: req.query,
      });
      next();
    } catch (error: any) {
      throw new AppError(error.errors[0].message, 400);
    }
  };
