import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

export const prismaClient = new PrismaClient();

async function internalUser() {
  // Verifica se o grupo padrao existe
  let defaultGroup = await prismaClient.group.findFirst({
    where: {
      name: 'DEV',
    },
  })

  // se nao existir ira criar
  if (!defaultGroup) {
    defaultGroup = await prismaClient.group.create({
      data: {
        name: 'DEV',
        role: 'DEV'
      },
    })
  }

  // Verifica se o user interno existe
  let defaultUser = await prismaClient.user.findFirst({
    where: {
      email: 'suporte@fenix.com'
    },
  })

  // Criptografia de senha via hash 8
  const passwordHash = await hash(process.env.INTERNAL_PASSWORD!, 8)

  // Se nao existir, ira cria-lo
  if(!defaultUser) {
    defaultUser = await prismaClient.user.create({
      data: {
        name: 'suporte' as string,
        nickname: 'suporte' as string,
        email: process.env.INTERNAL_USER! as string,
        password: passwordHash as string,
        group_id: defaultGroup.id as string,
      }
    })
  }
}

internalUser()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prismaClient.$disconnect()
  })