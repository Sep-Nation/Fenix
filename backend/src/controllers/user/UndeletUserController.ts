import { Request, Response } from "express";
import { UndeletUserService } from "../../services/user/UndeletUserService";

export class UndeletUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const undeletUser = new UndeletUserService();

    const user = await undeletUser.execute({
      user_id
    })

    return res.json(user);
  }
}