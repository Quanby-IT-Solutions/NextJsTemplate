import { useEffect, useState } from "react";
import { SignInButton } from "../sign-in-button/SignInButton";
import { UserGreeting } from "../user-greeting/UserGreeting";
import { createClient } from "@/src/utils/supabase/server";

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

  return (
    <div className={className}>
      {userEmail ? <UserGreeting email={userEmail} /> : <SignInButton />}
    </div>
  );
};
