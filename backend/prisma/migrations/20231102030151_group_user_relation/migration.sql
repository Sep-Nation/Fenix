/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `inssues` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `group_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GroupRole" AS ENUM ('NONE', 'READ', 'WRITE', 'ADMINISTRATIVE', 'DEV');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "group_id" TEXT NOT NULL,
ALTER COLUMN "excluded" SET DEFAULT false;

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "groups" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "GroupRole" DEFAULT 'NONE',

    CONSTRAINT "groups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "inssues_id_key" ON "inssues"("id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
