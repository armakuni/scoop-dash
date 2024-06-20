import { PrismaClient } from "@prisma/client";
import { beforeEach, describe, expect, it } from "vitest";
import { PostgressInterestedPeepRepository } from "./InterestedPeepRepository";

describe("Intrested peeps repository", () => {
  let prisma: PrismaClient;

  beforeEach(async () => {
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });

    await prisma.interestedUser.deleteMany({});
  });

  it("should return 0 when there are no interested peeps", async () => {
    // Arrange
    const repo = new PostgressInterestedPeepRepository(prisma);

    // Act &&  Assert
    expect(repo.getIntrestedPartiesCount()).resolves.toEqual(0);
  });

  it("should return 2 when there have been 2 interested peeps signup", async () => {
    // Arrange
    const repo = new PostgressInterestedPeepRepository(prisma);
    await repo.storeEmail("john.doe@example.com");
    await repo.storeEmail("alex.doe@example.com");

    // Act &&  Assert

    expect(repo.getIntrestedPartiesCount()).resolves.toEqual(2);

    // Check there are 2 peeps
    // check they are the correct 2 peeps
  });

  it("Should reject duplicates", async () => {
    // Arrange
    const repo = new PostgressInterestedPeepRepository(prisma);
    await repo.storeEmail("john.doe@example.com");

    expect(repo.storeEmail("john.doe@example.com")).rejects.toThrow(
      "Dupe Email",
    );
    expect(repo.getIntrestedPartiesCount()).resolves.toEqual(1);
  });

  it("should handle not being able to talk to the DB", async () => {
    // Arrange
    prisma = new PrismaClient({
      datasources: {
        db: {
          url: "BROKEN",
        },
      },
    });
    const repo = new PostgressInterestedPeepRepository(prisma);

    expect(repo.storeEmail("john.doe@example.com")).rejects.toThrow(
      "No DB Connection",
    );
  });
});
