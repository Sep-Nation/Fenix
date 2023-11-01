import { prismaClient } from "../../prisma";

interface UserRequest {
  user_id: string;
}

export class DeleteUserService {
  async execute({ user_id }: UserRequest) {

    {/* VERIFICAÇÕES */}

    // Verifica se foi informado um user_id
    if(!user_id) {
      throw new Error("Usuario nao informado!")
    }

    // Verifica se o usuário ja foi deletado
    const userAlreadyDeleted  = await prismaClient.user.findFirst({
      where: {
        id: user_id,
        excluded: true
      }
    })

    if(userAlreadyDeleted) {
      throw new Error("Usuário já deletado.")
    }

    // Captura o ID do User e muda o status para Exclude.

    const user = await prismaClient.user.update({
      where:{
        id: user_id
      },
      data:{
        excluded: true
      }
    })

    return user
  }
}