import { z } from "zod";

const emailSchema = z.string().email({ message: "Invalid email address." });
const passwordSchema = z.string().min(8, { message: "Password must be at least 8 characters." });

export const signUpSchema = z.object({
    fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    formType: z.literal("signUp"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
});

export const signInSchema = z.object({
    email: emailSchema,
    password: z.string().min(1, { message: "Password is required" }),
    formType: z.literal("signIn"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

export type AuthFormData = SignUpFormData | SignInFormData;