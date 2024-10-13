import { useState } from "react";
import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import { AuthFormData } from "../schemas/authFormSchema";
import { signUpAction, signInAction } from "../utils/actions";
import { toast } from "sonner";

// Convert form data to FormData
const convertToFormData = (data: AuthFormData): FormData => {
    const formData = new FormData();

    if (data.formType === "signUp") {
        const email = `${data.username}@${process.env.domain || "quanby.com"}`;
        formData.append("email", email);
        formData.append("password", data.password);
        formData.append("confirmPassword", data.confirmPassword);
        if (data.fullName) formData.append("fullName", data.fullName);
    } else {
        // Directly append email and password for sign-in
        formData.append("email", data.email);
        formData.append("password", data.password);
    }

    return formData;
};


export const useAuthForm = (form: UseFormReturn<AuthFormData>) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (data: AuthFormData) => {
        console.log("Form submitted with data:", data);
        setIsSubmitting(true);

        try {
            const formData = convertToFormData(data);
            console.log("FormData created:", Object.fromEntries(formData));

            const result = data.formType === "signUp"
                ? await signUpAction(formData as FormData)
                : await signInAction(formData as FormData);

            console.log("Action result:", result);

            if (result.success) {
                toast.success("Authentication successful!");
                router.replace("/dashboard");
            } else if (result.error) {
                // Handle specific error messages
                if (result.error.includes("User already registered")) {
                    toast.error("An account with this email already exists. Please sign in or use a different email.");
                    // Optionally, reset the form email field
                    form.setError("email", {
                        type: "manual",
                        message: "An account with this email already exists.",
                    });
                } else if (result.error.includes("Invalid login credentials")) {
                    toast.error("Invalid email or password. Please try again.");
                    // Set error for sign-in form
                    form.setError("password", {
                        type: "manual",
                        message: "Invalid email or password.",
                    });
                } else {
                    toast.error(result.error || "Authentication failed. Please try again.");
                }
            } else {
                toast.error("An unexpected error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            toast.error("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { onSubmit, isSubmitting };
};
