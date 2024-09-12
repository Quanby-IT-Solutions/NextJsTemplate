import React, { useEffect, useState } from "react";
import { createClient } from "@/app/utils/supabase/server";
import { hasEnvVars } from "@/app/utils/supabase/check-env-vars";
import { SignInButton } from "../sign-in-button/SignInButton";
import { EnvWarningMessage } from "../env-var-warning/EnvWarningMessage";
import { UserGreeting } from "../user-greeting/UserGreeting";

export interface AuthButtonProps {
  className?: string;
}

export const AuthButton: React.FC<AuthButtonProps> = ({ className = "" }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await createClient().auth.getUser();
      setUserEmail(data.user?.email || null);
    };

    fetchUser();
  }, []);

  if (!hasEnvVars) {
    return <EnvWarningMessage />;
  }

  return (
    <div className={className}>
      {userEmail ? <UserGreeting email={userEmail} /> : <SignInButton />}
    </div>
  );
};
