// src\utils\actions.ts
"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { encodedRedirect } from "./utils";
import { createClient } from "./supabase/server";
import { createClient as createAdminClient } from '@supabase/supabase-js';

// Create an admin client that bypasses RLS (Row-Level Security)
// This admin client allows performing privileged actions like calling RPC functions
const adminClient = createAdminClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_SECRET_KEY!
);

/**
 * signUpAction
 * 
 * Handles user registration by signing up the user via Supabase authentication,
 * and subsequently registering the user with an organization using an RPC function.
 *
 * @param {FormData} formData - The form data containing email and password for registration.
 * @returns {Promise<object>} Returns an object with either a success or error message.
 */
export const signUpAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const orgName = process.env.ORG;

  if (!email || !password) {
    return { error: "Email and password are required" };
  }

  // Sign up user via Supabase auth
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      // Redirect to callback URL after successful registration
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  // If an error occurs during sign-up, return the error message
  if (authError) {
    console.error(authError.code + " " + authError.message);
    return { error: authError.message };
  }

  // If the user was created successfully, register them with the organization
  if (authData.user) {
    try {
      // Use the admin client to call an RPC function to register the user with an organization
      const { data, error } = await adminClient.rpc('register_user_with_org', {
        user_id: authData.user.id,
        org_name: orgName,
      });

      if (error) throw error;

      console.log('User registered with organization:', data);
    } catch (error) {
      console.error('Error registering user with organization:', error);
      return { error: 'User registration with organization failed' };
    }
  }

  // Return success if registration and organization association succeed
  return { success: true };
};

/**
 * signInAction
 * 
 * Authenticates a user with email and password via Supabase authentication.
 *
 * @param {FormData} formData - The form data containing email and password for authentication.
 * @returns {Promise<object | void>} Returns a redirect to the dashboard or an error message.
 */
export const signInAction = async (formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  // Attempt to sign in the user using Supabase auth
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // If there's an error, return an error message
  if (error) {
    console.error(error.message);
    return { error: error.message };
  }

  // If successful, return success object
  return { success: true };

  /**
   * The old code is:
   * -> (Redirect the user to the dashboard upon successful sign-in)
   * return redirect("/dashboard");
   */
};

/**
 * forgotPasswordAction
 * 
 * Sends a password reset email to the user, providing a link to reset their password.
 *
 * @param {FormData} formData - The form data containing the user's email.
 * @returns {Promise<object | void>} Returns a success or error message based on the reset action.
 */
export const forgotPasswordAction = async (formData: FormData) => {
  const email = formData.get("email")?.toString();
  const supabase = createClient();
  const origin = headers().get("origin");
  const callbackUrl = formData.get("callbackUrl")?.toString();

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  // Send a password reset email to the user
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/dashboard/reset-password`,
  });

  // If there's an error, return an error message
  if (error) {
    console.error(error.message);
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password"
    );
  }

  // If a callback URL was provided, redirect to it
  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  // Notify the user to check their email for the reset link
  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password."
  );
};

/**
 * resetPasswordAction
 * 
 * Updates the user's password in Supabase after they provide a new password and confirmation.
 *
 * @param {FormData} formData - The form data containing the new password and its confirmation.
 * @returns {Promise<object | void>} Returns success or error message depending on password update.
 */
export const resetPasswordAction = async (formData: FormData) => {
  const supabase = createClient();

  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  // Ensure both password and confirmPassword fields are provided
  if (!password || !confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password and confirm password are required"
    );
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Passwords do not match"
    );
  }

  // Update the user's password via Supabase
  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  // If there's an error, return an error message
  if (error) {
    encodedRedirect(
      "error",
      "/dashboard/reset-password",
      "Password update failed"
    );
  }

  // Notify the user that their password has been updated
  encodedRedirect("success", "/dashboard/reset-password", "Password updated");
};

/**
 * signOutAction
 * 
 * Signs out the current user from the application via Supabase authentication.
 *
 * @returns {Promise<void>} Redirects the user to the sign-in page after signing out.
 */
export const signOutAction = async () => {
  const supabase = createClient();

  // Sign the user out of the application
  await supabase.auth.signOut();

  // Redirect the user to the sign-in page
  return redirect("/sign-in");
};
