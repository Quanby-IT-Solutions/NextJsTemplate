import { z } from "zod";

const emailSchema = z.string().email({ message: "Invalid email address." });
const passwordSchema = z.string().min(6, { message: "Password must be at least 6 characters." });

export const signUpSchema = z.object({
    fullName: z.string().min(2, { message: "Full Name must be at least 2 characters." }).optional(),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    formType: z.literal("signUp"),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match",
});

export const signInSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    formType: z.literal("signIn"),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;
export type SignInFormData = z.infer<typeof signInSchema>;

export type AuthFormData = SignUpFormData | SignInFormData;