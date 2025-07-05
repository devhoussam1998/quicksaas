import { z } from "zod/v4";

export const signInSchema = z.object({
  email: z.email().trim().toLowerCase().max(254, {
    message: "The email field must be less than 254 characters.",
  }),
});
