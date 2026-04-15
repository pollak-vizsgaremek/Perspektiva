import { test, expect } from "@playwright/test";

test("register page has headin", async ({ page }) => {
  await page.goto("http://localhost:5173/Register");
  await expect(
    page.getByRole("heading", { name: "Regisztráció" }),
  ).toBeVisible();
});

test("register page has visible inputs and buttons", async ({ page }) => {
  await page.goto("http://localhost:5173/Register");
  //Ha van label, akkor így kell:
  // await expect(page.getByLabelText("Felhasználónév")).toBeVisible();
  // await expect(page.getByLabelText("Jelszó")).toBeVisible();

  await expect(page.getByPlaceholder("Username")).toBeVisible();
  await expect(page.getByPlaceholder("Email")).toBeVisible();
  await expect(page.locator("#password")).toBeVisible();
  await expect(page.locator("#password2")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Regisztráció" }),
  ).toBeVisible();
  await expect(page.getByLabel("Újságíró vagy?")).toBeVisible();
});

test("register page fill inputs and press register button", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/Register");
  await page.fill("input[placeholder='Username']", "testuser");
  await page.fill("input[placeholder='Email']", "testemail@example.com");
  await page.fill("#password", "testpassword");
  await page.fill("#password2", "testpassword");
  await page.getByRole("button", { name: "Regisztráció" }).click();

  await expect(
    page.getByRole("heading", { name: "Bejelentkezes" }).toBeVisible(),
  );
});
