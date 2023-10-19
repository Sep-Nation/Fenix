-- AlterTable
ALTER TABLE "users" ALTER COLUMN "excluded" DROP NOT NULL,
ALTER COLUMN "password_reset" DROP NOT NULL;
