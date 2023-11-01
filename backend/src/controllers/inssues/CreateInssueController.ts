import { Request, Response } from "express";
import { CreateInssueService } from "../../services/inssues/CreateInssueService";

export class CreateInssueController {
  async handle(req: Request, res: Response) {
    const { title, information, user_id } = req.body;
  
    const createInssueService = new CreateInssueService();

    const inssue = await createInssueService.execute({
      title,
      information,
      user_id
    });
  
    return res.json(inssue)
  }
}