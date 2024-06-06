import { describe, it, expect } from "vitest";

import { screen, render } from "@testing-library/react";
import Home from "./page";

describe("Coming soon page", () => {
  it("should have the title of the website", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "ScoopDash" })).toBeVisible();
  });

  it("should say that the app is coming soon", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Coming Soon!" })).toBeVisible();
  });
});
