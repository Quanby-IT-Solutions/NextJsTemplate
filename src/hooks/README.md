# Authentication System Documentation (Auth Form)

This documentation provides an overview of the authentication system implemented using the `useAuthForm` hook for handling sign - up and login forms.It outlines the usage of the form, how to handle errors, and important details for maintaining the code.

## Overview

The authentication system supports both **Sign - Up** and **Sign - In** processes.It uses the `useAuthForm` custom hook to handle form submissions, success, and error handling.The form supports real - time validation, error messaging, and password toggling for better user experience.

### Key Features

- **Sign - Up** with dynamic email construction from the username.
- **Sign - In** with email and password.
- **Real - time validation** for form inputs.
- **Error handling** with specific error messages like "User already registered" or "Invalid login credentials."
  - **Password toggle** for showing / hiding passwords in both sign - up and sign -in forms.
- **Success notifications** via`toast` and error - specific messages for better feedback to users.

---

## Usage Guide

### 1. Form Handling

The authentication form relies on the `useForm` hook from `react-hook-form` to manage form data and validation.The `useAuthForm` hook is responsible for managing form submissions, error handling, and success handling.

#### Example of Usage in a Component

```tsx
import { AuthForm } from "@/components/AuthForm"; // Import the AuthForm component

<AuthForm formType="signUp" />  // For Sign-Up form
<AuthForm formType="signIn" />  // For Sign-In form
```

### 2. Custom Hook: `useAuthForm`

The `useAuthForm` hook manages the form submission process.It converts the form data into `FormData` and sends it to the backend using either the `signUpAction` or `signInAction` utilities.

#### Usage

```ts
const { onSubmit, isSubmitting } = useAuthForm(form);
```

- `onSubmit`: This function is triggered on form submission and handles the login or sign - up logic.

- `isSubmitting`: A boolean state that indicates whether the form is in the process of being submitted.

### 3. Dynamic Email Construction for Sign - Up

For sign - up, the form only collects the **username** and dynamically constructs the email by appending a domain(from environment variables or a default ).This ensures that users do not need to input the full email during sign - up.

```ts
const email = `${ data.username } @${ process.env.domain || "quanby.com" } `;
```

This construction happens within the `convertToFormData` function in the`useAuthForm` hook.

### 4. Error Handling

Errors are handled at different levels:

- **Backend Errors**: Errors like "User already registered" or "Invalid login credentials" are captured and displayed to the user using the `toast` function and inline form error messages.
- **Real - Time Validation**: Form validation happens in real - time.As the user types, errors are displayed, and fields like`username`, `email`, and`password` are validated dynamically.

#### Specific Error Messages

- **User Already Registered**: If a user tries to register with an email that already exists, a specific error message is displayed both in a toast and inline in the form.
  
  ```ts
  if (result.error.includes("User already registered")) {
      form.setError("email", {
          type: "manual",
          message: "An account with this email already exists.",
      });
      toast.error("An account with this email already exists. Please sign in or use a different email.");
  }
  ```

  - **Invalid Credentials**: For sign -in, if the credentials are incorrect, the form shows the error message inline and as a toast.

  ```ts
  if (result.error.includes("Invalid login credentials")) {
      form.setError("password", {
          type: "manual",
          message: "Invalid email or password.",
      });
      toast.error("Invalid email or password. Please try again.");
  }
  ```

### 5. Password Toggle

For both sign - up and sign -in forms, the password field includes a toggle that allows users to show or hide their password for better UX.This feature is implemented using Shadcn’s `Eye` and `EyeOff` icons.

#### Example in the Form

```tsx
<FormField
  control={formMethods.control}
  name="password"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"} // Toggle password visibility
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
```

### 6. Real - Time Validation

The form provides real - time feedback as the user types.This is enabled by setting`mode: "onChange"` in `react-hook-form`.This allows inline validation errors to be displayed immediately.

```ts
const formMethods = useForm<AuthFormData>({
  resolver: zodResolver(formType === "signUp" ? signUpSchema : signInSchema),
  mode: "onChange", // Enable real-time error handling
});
```

---

## Notes for Maintainers

- **Error Messaging**: Ensure that any backend changes include specific error messages(e.g., "User already registered" or "Invalid login credentials") to maintain good user feedback.
- **Real - Time Feedback**: The form should always provide real - time feedback for a smooth UX.Avoid using `onSubmit` validation only.
- **Password Toggle**: This feature enhances usability, so it should remain part of the form.Ensure that any updates preserve this functionality.
