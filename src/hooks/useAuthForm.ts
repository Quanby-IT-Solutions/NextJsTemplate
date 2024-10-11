import { useState } from "react";
import { useRouter } from "next/navigation";
import { UseFormReturn } from "react-hook-form";
import { AuthFormData } from "../schemas/authFormSchema";
import { signUpAction, signInAction } from "../utils/actions";

const convertToFormData = (data: AuthFormData): FormData => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    if (data.formType === "signUp") {
        if (data.fullName) formData.append("fullName", data.fullName);
        formData.append("confirmPassword", data.confirmPassword);
    }

    return formData;
};

export const useAuthForm = (form: UseFormReturn<AuthFormData>) => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: AuthFormData) => {
        console.log("Form submitted with data:", data);
        setIsSubmitting(true);
        setError(null);

        try {
            const formData = convertToFormData(data);
            console.log("FormData created:", Object.fromEntries(formData));

            const result = data.formType === "signUp"
                ? await signUpAction(formData as FormData)
                : await signInAction(formData as FormData);

            console.log("Action result:", result);

            if (result.success) {
                router.replace("/dashboard");
            } else {
                setError("Authentication failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            setError("An unexpected error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return { onSubmit, isSubmitting, error };
};