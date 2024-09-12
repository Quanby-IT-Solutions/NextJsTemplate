import ConnectSupabaseSteps from "@/src/_codux/boards/connect-supabase-steps/connect-supabase-steps";
import Hero from "@/src/_codux/boards/hero/hero";
import SignUpUserSteps from "@/src/_codux/boards/sign-up-user-steps/sign-up-user-steps";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main>
    </>
  );
}
