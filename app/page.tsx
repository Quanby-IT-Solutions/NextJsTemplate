import Hero from "@/src/components/hero/Hero";
import { SignInButton } from "@/src/components/sign-in-button/SignInButton";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Hello</h2>
        <SignInButton />
      </main>
    </>
  );
}
