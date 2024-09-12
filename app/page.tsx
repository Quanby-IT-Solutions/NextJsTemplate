import Hero from "@/src/_codux/boards/hero/Hero";

const steps = [
  {
    title: "Create Supabase project",
    content: (
      <p>
        Head over to{" "}
        <a
          href="https://app.supabase.com/project/_/settings/api"
          target="_blank"
          className="font-bold hover:underline text-foreground/80"
          rel="noreferrer"
        >
          database.new
        </a>{" "}
        and create a new Supabase project.
      </p>
    ),
  },
  {
    title: "Declare environment variables",
    content: (
      <p>
        Rename the{" "}
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
          .env.example
        </span>{" "}
        file in your Next.js app to{" "}
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
          .env.local
        </span>{" "}
        and populate with values from{" "}
        <a
          href="https://app.supabase.com/project/_/settings/api"
          target="_blank"
          className="font-bold hover:underline text-foreground/80"
          rel="noreferrer"
        >
          your Supabase project's API Settings
        </a>
        .
      </p>
    ),
  },
  {
    title: "Restart your Next.js development server",
    content: (
      <p>
        You may need to quit your Next.js development server and run{" "}
        <span className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-medium text-secondary-foreground border">
          npm run dev
        </span>{" "}
        again to load the new environment variables.
      </p>
    ),
  },
  {
    title: "Refresh the page",
    content: (
      <p>
        You may need to refresh the page for Next.js to load the new environment
        variables.
      </p>
    ),
  },
];

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Hello</h2>
      </main>
    </>
  );
}
