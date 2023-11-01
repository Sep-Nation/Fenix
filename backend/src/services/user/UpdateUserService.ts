import { prismaClient } from "../../prisma";
import { Role } from "@prisma/client";

interface UserRequest {
  user_id: string;
  name?: string;
  role?: Role;

}

export class UpdateUserService {
  async execute({ user_id, name, role }: UserRequest) {

    // Captura a ID do User e muda o status conforme preferir.
    const user = await prismaClient.user.update({
      where: {
        id: user_id
      },
      data: {
        name,
        role,
      },
    });

    return user
  }
}