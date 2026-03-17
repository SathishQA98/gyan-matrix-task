import { test as baseTest, BrowserContext, Page, expect } from "@playwright/test";
import Login from "../pages/login";

// ---- Hardcoded config ----
const BASE_URL = "http://localhost:8080/login";


// ---- Types ----
type Fixtures = {
  page: Page;
};

type WorkerFixtures = {
  userContext: BrowserContext;
};

// ---- Fixture ----
export const test = baseTest.extend<Fixtures, WorkerFixtures>({

  // ---------- Context (login once per worker) ----------
  userContext: [
    async ({ browser }, use) => {
      const context = await browser.newContext();
      const page = await context.newPage();

      await page.goto(BASE_URL);

      await new Login(page).LoginToApplication();

      await use(context);

      await context.close();
    },
    { scope: "worker" },
  ],

  // ---------- Page ----------
  userPage: async ({ userContext }, use) => {
    await use(userContext.pages()[0]);
  },

});

export { expect };