import { Request, Response } from "express";
import { UpdateInssueService } from "../../services/inssues/UpdateInssueService";

export class UpdateInssueController {
  async handle(req: Request, res: Response) {
    const { user_id, inssue_id, title, information } =  req.body;

    const updateInssue = new UpdateInssueService();

    const inssue = await updateInssue.execute({
      user_id,
      inssue_id,
      title,
      information
    })

    return res.json(inssue)
  }
}