# Next.js and Supabase Company Template

<p align="center">
  A future-proof template built with Next.js and Supabase, designed for all modern web applications within the company, featuring scalability, minimalistic design, and full authentication.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#usage"><strong>Usage</strong></a> ·
  <a href="#customization"><strong>Customization</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
</p>

<br/>

## Features

- **Next.js Stack**: Built on Next.js, leveraging both App Router and Pages Router with full support for Middleware and both Client and Server components.
- **Supabase Authentication**: Full user authentication integration with Supabase Auth using cookies for session handling.
- **Minimalist UI Design**: The template uses Tailwind CSS for styling and shadcn/ui for reusable components, focusing on a simple, clean, and modern design.
- **Future-Proof**: Designed to scale with future technologies and evolve with modern web standards.

## Usage

This template is designed to be the foundation for all future company web projects. Follow the steps below to get started:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Quanby-IT-Solutions/NextJsTemplate
   cd NextJsTemplate
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables by renaming `.env.local.example` to `.env.local` and filling in the necessary values.

4. Run the development server:

   ```bash
   npm run dev
   ```

   The project will now be live at [localhost:3000](http://localhost:3000/).

## Customization

- **UI Components**: Customize the UI by modifying existing components or adding new ones based on the company’s design needs. Components are styled using Tailwind CSS and powered by [shadcn/ui](https://ui.shadcn.com/).
- **Authentication**: Authentication is handled through Supabase. You can modify the authentication flow by editing the corresponding API routes and Supabase settings.
- **Color Scheme**: The template supports light and dark modes with color themes following a minimalist design. Modify the colors in `tailwind.config.js` as per company branding guidelines.

## Feedback and issues

For any feedback, suggestions, or issues, please reach out to the development team or submit a request through the internal company tracking system.

## Build For Production

```bash
pnpm clean
pnpm build
pnpm start
```

## Mar

- RPC key
