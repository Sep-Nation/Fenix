import { prismaClient } from "../../prisma";

interface UserRequest {
  user_id: string;
  name?: string;
}

export class UpdateUserService {
  async execute({ user_id, name }: UserRequest) {

    // Captura a ID do User e muda o status conforme preferir.
    const user = await prismaClient.user.update({
      where: {
        id: user_id
      },
      data: {
        name,
      },
    });

    return user
  }
}