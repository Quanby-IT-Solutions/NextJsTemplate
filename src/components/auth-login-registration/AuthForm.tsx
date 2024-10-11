import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, signInSchema, AuthFormData } from "@/src/schemas/authFormSchema";
import { Button } from "../button/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form/Form";
import { useAuthForm } from "@/src/hooks/useAuthForm";
import { Alert, AlertDescription } from "../alert/Alert";
import { Input } from "../input/Input";

export interface AuthFormProps {
  className?: string;
  formType: "signIn" | "signUp";
}

const AuthForm: React.FC<AuthFormProps> = ({
  className = "",
  formType,
}) => {
  const form = useForm<AuthFormData>({
    resolver: zodResolver(formType === "signUp" ? signUpSchema : signInSchema),
    defaultValues: formType === "signUp"
      ? { fullName: "", email: "", password: "", confirmPassword: "", formType: "signUp" }
      : { email: "", password: "", formType: "signIn" },
  });

  const { onSubmit, isSubmitting, error } = useAuthForm(form);

  return (
    <div className={`space-y-8 ${className}`}>
      <h1 className="text-2xl font-semibold text-center text-neutral-800 dark:text-neutral-100">
        {formType === "signUp" ? "Create an Account" : "Welcome Back!"}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {formType === "signUp" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="py-2 px-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@domain.com"
                    className="py-2 px-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Your password"
                    className="py-2 px-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {formType === "signUp" && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      className="py-2 px-4 w-full rounded-md border border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="w-full py-3 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? formType === "signUp" ? "Signing up..." : "Signing in..."
              : formType === "signUp" ? "Sign up" : "Sign in"
            }
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthForm;
