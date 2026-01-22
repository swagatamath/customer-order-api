import { Request, Response } from "express";
import { asyncHandler } from "../../middleware/asyncHandler";
import * as authService from "./auth.service";

export const register = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await authService.register(req.body);
    res.status(201).json({ user });
  }
);

export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await authService.login(email, password);

  res.status(200).json({ token });
});
