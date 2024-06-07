import { describe, it, expect } from "vitest";

import { screen, render } from "@testing-library/react";
import Home from "./pages";

describe("Coming soon page", () => {
  it("should have the title of the website", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "ScoopDash" })).toBeVisible();
  });

  it("should say that the app is coming soon", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Coming Soon!" })).toBeVisible();
  });

  it("should say that app is having interesed peeps", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Interested Peeps: 0" })).toBeVisible();
  });
});
