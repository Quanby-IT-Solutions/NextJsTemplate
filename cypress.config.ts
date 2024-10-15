import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        // Modify browser launch options
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--disable-gpu');
          return launchOptions;
        }
      });

      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        // Add more custom tasks here
      });

      on('after:spec', (spec, results) => {
        // Perform actions after each spec file runs
        if (results && results.stats.failures > 0) {
          console.log(`Spec ${spec.name} failed`);
        }
      });

      // You can also modify the config object here
      config.baseUrl = 'http://localhost:3000';

      return config;
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});