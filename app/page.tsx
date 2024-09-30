import Hero from "@/src/components/hero/Hero";
import { AuthButtons } from "@/src/components/auth-button/AuthButton";

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Hello</h2>
        <AuthButtons />
      </main>
    </>
  );
}
