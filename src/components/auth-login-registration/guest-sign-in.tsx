import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { useAuthForm } from "@/src/hooks/use-auth-form";
import { AuthFormData } from "@/src/schemas/authFormSchema";

interface GuestSignInProps {
  guestOptions: string[];
  isDevelopment: boolean;
}

const GuestSignIn: React.FC<GuestSignInProps> = ({
  guestOptions,
  isDevelopment,
}) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || "quanby.com";
  const secretPass = process.env.NEXT_PUBLIC_SECRET_PASS || "password";

  const guestCredentials = {
    "Guest Admin": `test-admin@${domain}`,
    "Guest User": `test-user@${domain}`,
  };

  const formMethods = useForm<AuthFormData>({
    defaultValues: { email: "", password: "", formType: "signIn" },
  });

  const { onSubmit, isSubmitting } = useAuthForm(formMethods);

  const handleGuestSignIn = async (option: string) => {
    const email = guestCredentials[option as keyof typeof guestCredentials];
    const password = secretPass;

    try {
      await onSubmit({ email, password, formType: "signIn" });
      // toast.success(`Signed in successfully as ${option}`);
    } catch (error) {
      console.error("Error signing in as guest:", error);
      toast.error("Failed to sign in as guest. Please try again.");
    }
  };

  return (
    <>
      {isDevelopment && (
        <motion.div
          className="flex flex-col items-center mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-full bg-neutral-300 dark:bg-neutral-700 h-[1px]" />

          <p className="mt-8 mb-4 text-sm font-medium tracking-wide text-zinc-900 dark:text-zinc-100">
            Sign in as guest:
          </p>

          <FormProvider {...formMethods}>
            <div className="flex flex-wrap gap-4 w-full justify-center">
              {guestOptions.map((option) => (
                <motion.div
                  key={option}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={() => handleGuestSignIn(option)}
                    variant="default"
                    size="sm"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Signing in..." : option}
                  </Button>
                </motion.div>
              ))}
            </div>
          </FormProvider>
        </motion.div>
      )}
    </>
  );
};

export default GuestSignIn;