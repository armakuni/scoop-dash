import { describe, it, expect } from "vitest";

import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Home from "./page";

describe("Coming soon page", () => {
  it("should have the title of the website", async () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: (text) => text.includes("ScoopDash"),
      }),
    ).toBeVisible();
  });

  it("should say that the app is coming soon", async () => {
    render(<Home />);

    expect(screen.getByRole("heading", { name: "Coming Soon!" })).toBeVisible();
  });

  it("should say that app is having interesed peeps", async () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: "Interested Peeps: 0" }),
    ).toBeVisible();
  });

  it("should display a form to collect visitor's details", async () => {
    render(<Home />);

    expect(
      screen.getByRole("textbox", { name: "visitors email" }),
    ).toBeVisible();

    expect(
      screen.getByRole("button", { name: "Submit" }),
    ).toBeVisible();
  });

  it("should submit visitor's details and increase intrested peeps counter", async () => {
    render(<Home />);

    const emailInput = screen.getByRole('textbox', { name: /visitors email/i });
    const submitButton = screen.getByRole('button', { name: /submit/i });

    userEvent.type(emailInput, "john.doe@gmail.com");

    userEvent.click(submitButton);

    expect(
      screen.getByRole("heading", { name: "Interested Peeps: 1" }),
    ).toBeVisible();

    expect(emailInput).toHaveValue('');
  });
  
});
