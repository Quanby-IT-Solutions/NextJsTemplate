import { z } from "zod";

// Username schema to enforce no spaces
const usernameSchema = z
    .string()
    .min(1, { message: "Username is required." })
    .regex(/^[^\s]+$/, "Username must not contain spaces.");

const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters." });

export const signUpSchema = z.object({
    fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
    username: usernameSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    formType: z.literal("signUp"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

export const signInSchema = z.object({
    email: z.string().email({ message: "Invalid email address." }),
    password: z.string().min(1, { message: "Password is required" }),
    formType: z.literal("signIn"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

export type AuthFormData = SignUpFormData | SignInFormData;
