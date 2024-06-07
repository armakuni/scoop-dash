-- CreateTable
CREATE TABLE "InterestedUser" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "InterestedUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "InterestedUser_email_key" ON "InterestedUser"("email");
