import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { signUpSchema, signInSchema, AuthFormData } from "@/src/schemas/authFormSchema";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form/Form";
import { Button } from "../button/Button";
import { useAuthForm } from "@/src/hooks/useAuthForm";
import { Input } from "../input/Input";
import { Toaster } from "../ui/sonner";

export interface AuthFormProps {
  className?: string;
  formType: "signIn" | "signUp";
}

const AuthForm: React.FC<AuthFormProps> = ({
  className = "",
  formType,
}) => {
  const formMethods = useForm<AuthFormData>({
    resolver: zodResolver(formType === "signUp" ? signUpSchema : signInSchema),
    defaultValues: formType === "signUp"
      ? { fullName: "", email: "", password: "", confirmPassword: "", formType: "signUp" }
      : { email: "", password: "", formType: "signIn" },
  });

  const { onSubmit, isSubmitting } = useAuthForm(formMethods);

  return (
    <motion.div
      className={`space-y-8 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.h1
        className="text-2xl font-semibold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {formType === "signUp" ? "Create an Account" : "Welcome Back!"}
      </motion.h1>

      <FormProvider {...formMethods}>
        <motion.form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {formType === "signUp" && (
            <FormField
              control={formMethods.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={formMethods.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="example@domain.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={formMethods.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder={formType === "signUp" ? "Minimum 8 characters" : "Your password"}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {formType === "signUp" && (
            <FormField
              control={formMethods.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? formType === "signUp" ? "Signing up..." : "Signing in..."
              : formType === "signUp" ? "Sign up" : "Sign in"}
          </Button>
        </motion.form>
      </FormProvider>

      <Toaster richColors position="bottom-right" />
    </motion.div>
  );
};

export default AuthForm;
