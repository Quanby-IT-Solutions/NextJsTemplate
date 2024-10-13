import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { signUpSchema, signInSchema, AuthFormData, SignUpFormData } from "@/src/schemas/authFormSchema";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../form/Form";
import { Button } from "../button/Button";
import { useAuthForm } from "@/src/hooks/useAuthForm";
import { Input } from "../input/Input";
import { Eye, EyeOff } from "lucide-react";

const DOMAIN = process.env.domain || "quanby.com";

export interface AuthFormProps {
  className?: string;
  formType: "signIn" | "signUp";
}

const AuthForm: React.FC<AuthFormProps> = ({ className = "", formType }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formMethods = useForm<AuthFormData>({
    resolver: zodResolver(formType === "signUp" ? signUpSchema : signInSchema),
    mode: "onChange",
    defaultValues: formType === "signUp"
      ? { fullName: "", username: "", password: "", confirmPassword: "", formType: "signUp" }
      : { email: "", password: "", formType: "signIn" },
  });

  const { onSubmit: originalOnSubmit, isSubmitting } = useAuthForm(formMethods);

  const onSubmit = async (data: AuthFormData) => {
    if (formType === "signUp") {
      const signUpData = data as SignUpFormData;
      const fullEmail = `${signUpData.username}@${DOMAIN}`;
      const modifiedData = {
        ...signUpData,
        email: fullEmail,
      };

      await originalOnSubmit(modifiedData);
    } else {
      await originalOnSubmit(data);
    }
  };

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
          {/* Sign-Up Form */}
          {formType === "signUp" && (
            <>
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

              <FormField
                control={formMethods.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <div className="flex items-center">
                        <Input
                          placeholder="Enter your username"
                          {...field}
                          onChange={(e) => {
                            const value = e.target.value.split('@')[0];
                            field.onChange(value);
                          }}
                        />
                        <span className="ml-2">@{DOMAIN}</span>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field with Toggle */}
              <FormField
                control={formMethods.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="******"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password Field with Toggle */}
              <FormField
                control={formMethods.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="******"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          {/* Sign-In Form */}
          {formType === "signIn" && (
            <>
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
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="******"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting
              ? formType === "signUp" ? "Signing up..." : "Signing in..."
              : formType === "signUp" ? "Sign up" : "Sign in"}
          </Button>
        </motion.form>
      </FormProvider>
    </motion.div>
  );
};

export default AuthForm;
