import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, nickname, password, email } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      name,
      nickname,
      password,
      email
    });

    return res.json(user)
  }
}