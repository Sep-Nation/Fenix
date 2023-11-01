import { prismaClient } from "../../prisma";

interface UserRequest {
  user_id: string;
}

export class UndeletUserService {
  async execute({ user_id }: UserRequest ) {

    // TODO adicionar logica de verificações se o user ja foi excluido ou nao

    const user = await prismaClient.user.update({
      where: {
        id: user_id
      },
      data: {
        excluded: false
      }
    })

    return user
  }
}