import { Request, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { user_id, name, role } = req.body;

    const updateUser = new UpdateUserService();

    const user = await updateUser.execute({
      user_id,
      name,
      role
    })

    return res.json(user);
  }
}