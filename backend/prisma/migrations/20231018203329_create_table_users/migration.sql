-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "excluded" BOOLEAN NOT NULL,
    "password_reset" BOOLEAN NOT NULL,
    "agreement_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_notice" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "last_password_update" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
