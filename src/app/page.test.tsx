import { describe, it, expect, vi } from "vitest";

import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";
import { RepositoryProvider } from "./RepositoryProvider";


import {InterestedPeepRepository} from "@/app/InterestedPeepRepository";

describe("Coming soon page", () => {
  it("should have the title of the website", async () => {
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(1),
    };
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <Home />
      </RepositoryProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: (text) => text.includes("ScoopDash"),
      }),
    ).toBeVisible();
  });

  it("should say that the app is coming soon", async () => {
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(1),
    };
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <Home />
      </RepositoryProvider>
    );

    expect(screen.getByRole("heading", { name: "Coming Soon!" })).toBeVisible();
  });

  it("should say that app is having interesed peeps", async () => {
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(0),
    };

    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <Home />
      </RepositoryProvider>
    );

    expect(
      screen.getByRole("heading", { name: "Interested Peeps: 0" }),
    ).toBeVisible();
  });

  it("should display a form to collect visitor's details", async () => {
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(1),
    };
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <Home />
      </RepositoryProvider>
    );

    expect(
      screen.getByRole("textbox", { name: "visitors email" }),
    ).toBeVisible();

    expect(screen.getByRole("button", { name: "Submit" })).toBeVisible();
  });
});
