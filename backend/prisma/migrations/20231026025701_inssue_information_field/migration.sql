/*
  Warnings:

  - Added the required column `information` to the `inssues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "inssues" ADD COLUMN     "information" TEXT NOT NULL;
