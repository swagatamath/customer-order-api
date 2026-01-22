import bcrypt from "bcryptjs";
import { User } from "./auth.model";
import { AppError } from "../../utils/AppError";
import { signToken } from "../../utils/jwt";

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    name: data.name,
    email: data.email,
    password: hashedPassword,
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

  return signToken({ id: user._id });
};
