Here's a general-purpose template in Markdown for your project using Supabase and Next.js. It includes full authentication functionality, tailored for all future projects:

<p align="center">
 The fastest way to build apps with Next.js and Supabase, featuring full authentication out of the box
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#deploy-to-vercel"><strong>Deploy to Vercel</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a> ·
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Works seamlessly across the entire [Next.js](https://nextjs.org) stack:
  - App Router
  - Pages Router
  - Middleware
  - Client and Server components
- Full authentication setup with Supabase Auth using cookies
- Tailwind CSS for easy and modern styling
- UI components powered by [shadcn/ui](https://ui.shadcn.com/)
- Ready for deployment with [Supabase Vercel Integration and Vercel deploy](#deploy-your-own)
  - Automatic configuration of environment variables in Vercel

## Demo

Check out a live demo of this template at [your-project-demo-url.vercel.app](https://your-project-demo-url.vercel.app/).

## Deploy to Vercel

Deploying to Vercel will walk you through creating a Supabase account and project. After setting up the Supabase integration, all environment variables will be auto-configured.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fnextjs-supabase-template&project-name=nextjs-supabase-template&repository-name=nextjs-supabase-template&demo-title=nextjs-supabase-template&demo-description=This+template+configures+Supabase+Auth+with+cookies%2C+making+the+user%27s+session+available+throughout+Next.js&demo-url=https%3A%2F%2Fyour-project-demo-url.vercel.app%2F&external-id=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fwith-supabase)

This will also clone the template to your GitHub repository. You can then clone it locally for further development.

To only develop locally without deployment, follow the steps below.

## Clone and run locally

1. Create a Supabase project from the [Supabase dashboard](https://database.new).
2. Use the Supabase Starter template to create a Next.js app:

   ```bash
   npx create-next-app -e with-supabase
   ```
3. Change into the app's directory:

   ```bash
   cd name-of-new-app
   ```
4. Rename `.env.local.example` to `.env.local` and add the following details:

   ```
   NEXT_PUBLIC_SUPABASE_URL=[YOUR SUPABASE PROJECT URL]
   NEXT_PUBLIC_SUPABASE_ANON_KEY=[YOUR SUPABASE ANON API KEY]
   ```

   Both values can be found in your Supabase project's API settings [here](https://app.supabase.com/project/_/settings/api).
5. Run the development server:

   ```bash
   npm run dev
   ```

   Your project will now be live at [localhost:3000](http://localhost:3000/).
6. Customize the UI by modifying `components.json` or reinstalling [shadcn/ui](https://ui.shadcn.com/docs/installation/next) as needed.

> Refer to [Supabase&#39;s Local Development Guide](https://supabase.com/docs/guides/getting-started/local-development) for running Supabase locally.

## Feedback and issues

For any feedback or issues, please submit them through the [GitHub repository](https://github.com/supabase/supabase/issues/new/choose).

## More Supabase examples

- [Next.js Subscription Payments](https://github.com/vercel/nextjs-subscription-payments)
- [Cookie-based Auth with Next.js 13 App Router](https://youtube.com/playlist?list=PL5S4mPUpp4OtMhpnp93EFSo42iQ40XjbF)
- [Supabase Auth and Next.js App Router](https://github.com/supabase/supabase/tree/master/examples/auth/nextjs)

This template provides a general-purpose approach for setting up a project with Supabase and Next.js, including full authentication, local development setup, and deployment with Vercel.


[https://www.genui.com/resources/env-variables-json#:~:text=By%20using%20dotenv%20and%20cross,it%20works%20across%20development%20platforms](https://www.genui.com/resources/env-variables-json#:~:text=By%20using%20dotenv%20and%20cross,it%20works%20across%20development%20platforms)!
