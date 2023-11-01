import { prismaClient } from "../../prisma";

interface InssueRequest {
  user_id: string;
  inssue_id: string;
  title?: string;
  information?: string;
}

export class UpdateInssueService {
  async execute({user_id, inssue_id, title, information}: InssueRequest) {
    const inssue = await prismaClient.inssue.update({
      where: {
        id: user_id && inssue_id
      },
      data: {
        title,
        information
      }
    });

    return inssue
  }
}