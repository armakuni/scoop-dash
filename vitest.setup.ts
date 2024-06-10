import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import { Lobster_Two } from "next/font/google";

vi.mock("next/font/google", () => ({
  Lobster_Two: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));
