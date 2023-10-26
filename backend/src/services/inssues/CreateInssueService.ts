import { prismaClient } from "../../prisma";

interface InssueRequest {
  title: string;
  information: string;
  user_id: string;
}

export default class CreateInssueService {
  async execute({title, information, user_id}: InssueRequest) {

    // Este modulo Cria inssues
    /**
     * TUDO DAQUI PRA FRENTE E EXPERIMENTAL
     * E NAO DEVE SER UTILIZADO EM PRODUCAO
     */
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