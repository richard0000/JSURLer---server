import { expect, test } from "@jest/globals";
import { SluggerService } from ".";

test("generates a valid slug", async () => {
  const slug = SluggerService.generateSlug();

  expect(slug.length).toBe(20);
});
