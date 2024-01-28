import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '7ma4iz',
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
          "reportDir": "cypress/reports/mocha",
          "quite": true,
          "overwrite": false,
          "html": true,
          "json": true
      }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
