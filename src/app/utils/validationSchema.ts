import { z } from "zod";

// Zod schema for form validation
export const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

// TypeScript type from Zod schema
export type FormData = z.infer<typeof formSchema>;
