import { render, screen } from "@testing-library/react";
import RegisterForm from "./form";
import { RepositoryProvider } from "./RepositoryProvider";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import {
  DuplicateEmailError,
  InterestedPeepRepository,
} from "./InterestedPeepRepository";

describe("Intrested users form", () => {
  it("should display interested peep counts", async () => {
    // Arrange - get the CuT into expected state (set up some test double)
    // prepare test double to return the current count
    // some how inject the test double into the CuT
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(100),
    };

    //act (Run the CuT)
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <RegisterForm />
      </RepositoryProvider>,
    );

    // assert (check our expectation are met)
    expect(
      await screen.findByRole("heading", {
        name: /Interested Peeps: 100/,
      }),
    ).toBeVisible();
  });

  it("Save email", async () => {
    // Arrange - get the CuT into expected state (set up some test double)
    // prepare test double to return the current count
    // some how inject the test double into the CuT
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(100),
      storeEmail: vi.fn(),
    };

    const storeEmailSpy = vi.spyOn(MockInterestedPeepRepository, "storeEmail");

    //act (Run the CuT)
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <RegisterForm />
      </RepositoryProvider>,
    );

    const emailInput = screen.getByRole("textbox", { name: /visitors email/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.click(submitButton);

    // assert (check our expectation are met)
    expect(storeEmailSpy).toHaveBeenCalledOnce();
    expect(storeEmailSpy).toHaveBeenCalledWith("john.doe@example.com");
  });

  it("should require an email", async () => {
    // Arrange - get the CuT into expected state (set up some test double)
    // prepare test double to return the current count
    // some how inject the test double into the CuT
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(100),
      storeEmail: vi.fn(),
    };

    const storeEmailSpy = vi.spyOn(MockInterestedPeepRepository, "storeEmail");

    //act (Run the CuT)
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <RegisterForm />
      </RepositoryProvider>,
    );

    const emailInput = screen.getByRole("textbox", { name: /visitors email/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.click(submitButton);

    expect(await screen.getByText("Email is required")).toBeVisible();
    expect(storeEmailSpy).not.toHaveBeenCalled();
  });

  it("should reject invalid email", async () => {
    // Arrange - get the CuT into expected state (set up some test double)
    // prepare test double to return the current count
    // some how inject the test double into the CuT
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(100),
      storeEmail: vi.fn(),
    };

    const storeEmailSpy = vi.spyOn(MockInterestedPeepRepository, "storeEmail");
    //act (Run the CuT)
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <RegisterForm />
      </RepositoryProvider>,
    );

    const emailInput = screen.getByRole("textbox", { name: /visitors email/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(emailInput, "john.doe.com");
    await userEvent.click(submitButton);

    expect(screen.getByText("Email is not valid")).toBeVisible();
    expect(storeEmailSpy).not.toHaveBeenCalled();
  });

  it("Should reject duplicate emails", async () => {
    const MockInterestedPeepRepository: InterestedPeepRepository = {
      getIntrestedPartiesCount: vi.fn().mockResolvedValue(100),
      storeEmail: vi.fn().mockImplementation(() => {
        throw new DuplicateEmailError();
      }),
    };

    const storeEmailSpy = vi.spyOn(MockInterestedPeepRepository, "storeEmail");
    //act (Run the CuT)
    render(
      <RepositoryProvider repository={MockInterestedPeepRepository}>
        <RegisterForm />
      </RepositoryProvider>,
    );

    const emailInput = screen.getByRole("textbox", { name: /visitors email/i });
    const submitButton = screen.getByRole("button", { name: /submit/i });

    await userEvent.type(emailInput, "duplicate@example.com");
    await userEvent.click(submitButton);

    expect(screen.getByText("Email is a duplicate")).toBeVisible();
  });
});
