import { prismaClient } from "../../prisma";

interface InssueRequest {
  title: string;
  information: string;
  user_id: string;
}

export class CreateInssueService {
  async execute({title, information, user_id}: InssueRequest) {

    // Este modulo Cria inssues
    /**
     * TUDO DAQUI PRA FRENTE E EXPERIMENTAL
     * E NAO DEVE SER UTILIZADO EM PRODUÇÃO
     */

    {/* VERIFICAÇÕES */}

    // Evitar que o user_id vá em branco
    if(!user_id){
      throw new Error("Id de usuário não informado!!")
    }

    // Verifica se ja existe uma issue com o mesmo titulo
    const issueTitleAlreadyExists = await prismaClient.inssue.findFirst({
      where: {
        title: title
      }
    })

    if (issueTitleAlreadyExists) {
      throw new Error("Já existe uma inssue sendo tratada com este titulo!!!")
    }

    const inssue = await prismaClient.inssue.create({
      data:{
        title: title,
        information: information,
        user_id: user_id
      }
    })
    return inssue
  }
}