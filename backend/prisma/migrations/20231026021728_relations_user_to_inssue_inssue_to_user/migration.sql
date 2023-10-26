-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "InssueStatus" AS ENUM ('RESOLVED', 'INPROGRESS', 'CLOSED');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "inssues" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" "InssueStatus",
    "draft" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "inssues_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "inssues" ADD CONSTRAINT "inssues_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
