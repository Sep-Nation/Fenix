import { Request, Response } from "express";
import { DeleteUserService } from "../../services/user/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.body;

    const deleteUser = new DeleteUserService();

    const user = await deleteUser.execute({
      user_id
    })

    return res.json(user);
    
  }
}