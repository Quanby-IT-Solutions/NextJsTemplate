import { z } from "zod";

export const userSchema = z.object({
    firstName: z.string().min(2, { message: "First Name must be at least 2 characters long." }),
    lastName: z.string().min(2, { message: "Last Name must be at least 2 characters long." }),
    email: z.string().email({ message: "Invalid email address." }),

    // Optional field
    phone: z.string().optional(),
    bio: z.string().optional(),
});

export type UserFormData = z.infer<typeof userSchema>;
