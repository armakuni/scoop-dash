"use client";
import { PrismaClient } from "@prisma/client";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";

export interface InterestedPeepRepository {
  getIntrestedPartiesCount(): Promise<number>;

  storeEmail(email: string): void;
}

export class DuplicateEmailError extends Error {}

export class PostgressInterestedPeepRepository
  implements InterestedPeepRepository
{
  readonly prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async storeEmail(email: string) {
    try {
      await this.prisma.interestedUser.create({
        data: {
          email: email,
        },
      });
    } catch (error: unknown) {
      if (error instanceof PrismaClientInitializationError) {
        throw new Error("No DB Connection");
      } else {
        throw new DuplicateEmailError("Dupe Email");
      }
    }
  }

  async getIntrestedPartiesCount() {
    return this.prisma.interestedUser.count();
  }
}
