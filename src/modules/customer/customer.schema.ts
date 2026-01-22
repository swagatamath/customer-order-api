import { z } from "zod";

export const createCustomerSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
  }),
});
